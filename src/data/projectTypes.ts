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
    hint: 'Interactive product with state, auth, data.',
    promptFragment: 'a production web application (interactive, stateful, multi-view)',
  },
  {
    id: 'website',
    label: 'Marketing Website',
    hint: 'Landing / brand / content site.',
    promptFragment: 'a marketing website focused on brand storytelling and conversion',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    hint: 'Data-dense analytics surface.',
    promptFragment: 'a data-dense analytics dashboard with charts, tables and KPI tiles',
  },
  {
    id: 'mobile-app',
    label: 'Mobile App',
    hint: 'Native-feeling touch-first app.',
    promptFragment: 'a touch-first mobile application with native-feeling navigation and gestures',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    hint: 'Personal / creative showcase.',
    promptFragment: 'a creative portfolio that showcases work with strong art direction',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    hint: 'Storefront, product, checkout.',
    promptFragment: 'an e-commerce storefront with product browsing, detail pages and checkout',
  },
];

export const projectTypeById = (id: string) => PROJECT_TYPES.find((p) => p.id === id);
