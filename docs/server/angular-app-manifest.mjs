
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/final---project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/final---project"
  },
  {
    "renderMode": 2,
    "route": "/final---project/home"
  },
  {
    "renderMode": 2,
    "route": "/final---project/projects"
  },
  {
    "renderMode": 2,
    "route": "/final---project/service"
  },
  {
    "renderMode": 2,
    "route": "/final---project/contact"
  },
  {
    "renderMode": 2,
    "route": "/final---project/project-details"
  },
  {
    "renderMode": 2,
    "route": "/final---project/About-me"
  },
  {
    "renderMode": 2,
    "route": "/final---project/pricing"
  },
  {
    "renderMode": 2,
    "route": "/final---project/faq"
  },
  {
    "renderMode": 2,
    "route": "/final---project/fille"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 689, hash: '0f6cbda8b696c6df753260cb7259fa3bf2289fdc3bcec2d907ced8be01cb25cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: 'cb3098276beebd0acee05cf33b8a480ddb8400ee9c5c3ee53ee74a04f9696d43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 60739, hash: '4a516654af3317e6037b2f324f2ace755a33c3ae25ef6ff48d7c8256a9ad28a4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 60739, hash: '4a516654af3317e6037b2f324f2ace755a33c3ae25ef6ff48d7c8256a9ad28a4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 30248, hash: '9a1b67324bb17145aa38c04ad5b547f6e6340ce9cf291e61631d20bdb972784e', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 26311, hash: '90e4a55914556ea1ba31f5010683ac6b0a3715dd0f91c666ccd774660b8c77d8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'project-details/index.html': {size: 24545, hash: 'd879fb1698279b17cf29d24dbe928b3d12f3d35559e444f139e7979f0fa00806', text: () => import('./assets-chunks/project-details_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 41779, hash: '08be88ad7db727a2599b8a4e15361a1bb2a5c9528da9e601166b9c80c39eebaa', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'About-me/index.html': {size: 32394, hash: 'f1736417fd355272378c77110d4a0ecacade9f386347810040b49c77b5c724d1', text: () => import('./assets-chunks/About-me_index_html.mjs').then(m => m.default)},
    'fille/index.html': {size: 20087, hash: '52c6e8989aaf12203e56670fca5c61903819fd59d67fb3be1c687955a74d0c8b', text: () => import('./assets-chunks/fille_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 27031, hash: 'fb9aa1960f343f4f264207a0350700e3183fc799a3742c98884121591d177f08', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 27784, hash: 'dbdf057247f8a0ba823c327a4cefb3075913861b79b52b01647ff010511d18af', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-PG4NTQGW.css': {size: 38589, hash: 'itqLFsi6nug', text: () => import('./assets-chunks/styles-PG4NTQGW_css.mjs').then(m => m.default)}
  },
};
