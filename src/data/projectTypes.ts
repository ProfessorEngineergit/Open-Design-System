export interface ProjectType {
  id: string;
  label: string;
  hint: string;
  promptFragment: string;
}

export const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'web-app',
    label: 'Web App',
    hint: 'An interactive product — accounts, state, data.',
    promptFragment: 'a production web application (interactive, stateful, multi-view)',
  },
  {
    id: 'website',
    label: 'Marketing Website',
    hint: 'A landing page, brand or content site.',
    promptFragment: 'a marketing website focused on brand storytelling and conversion',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    hint: 'A data-heavy analytics screen.',
    promptFragment: 'a data-dense analytics dashboard with charts, tables and KPI tiles',
  },
  {
    id: 'mobile-app',
    label: 'Mobile App',
    hint: 'A touch-first app that feels native.',
    promptFragment: 'a touch-first mobile application with native-feeling navigation and gestures',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    hint: 'A personal or creative showcase.',
    promptFragment: 'a creative portfolio that showcases work with strong art direction',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    hint: 'Storefront, products, checkout.',
    promptFragment: 'an e-commerce storefront with product browsing, detail pages and checkout',
  },
];

export const projectTypeById = (id: string) => PROJECT_TYPES.find((p) => p.id === id);
