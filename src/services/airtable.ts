const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;
const apiKey = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

export interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    image?: string;
}

export const getProjects = async (): Promise<Project[]> => {
    const { default: Airtable } = await import('airtable');

    if (!baseId || !tableName || !apiKey) {
        throw new Error("Les variables d'environnement Airtable ne sont pas configurées.");
    }

    const base = new Airtable({ apiKey }).base(baseId);
    const records = await base(tableName).select().all();
    
    return records.map(record => ({
        id: record.id,
        title: record.fields.Title as string,
        description: record.fields.Description as string,
        stack: (record.fields.Stack as string[]) || [],
        image: record.fields.Image as string | undefined,
    }));
};

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    highlighted: boolean;
}

export const getServices = async (): Promise<Service[]> => {
    const { default: Airtable } = await import('airtable');

    if (!baseId || !apiKey) {
        throw new Error("Les variables d'environnement Airtable ne sont pas configurées.");
    }

    const base = new Airtable({ apiKey }).base(baseId);
    const records = await base("Services").select().all();
    
    return records.map(record => ({
        id: record.id,
        title: record.fields.Title as string,
        description: record.fields.Description as string,
        icon: record.fields.Icon as string,
        features: (record.fields.Features as string || '').split('\n').filter(f => f),
        highlighted: record.fields.Highlighted === 'Yes',
    }));
};
