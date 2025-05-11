
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/service"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/project-details"
  },
  {
    "renderMode": 2,
    "route": "/About-me"
  },
  {
    "renderMode": 2,
    "route": "/pricing"
  },
  {
    "renderMode": 2,
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "route": "/fille"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 674, hash: '154437702762f209bdf6ccac6a0ca70c9b4f5a766dc216736520737d3b1f7b73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '73bac1a8fee4c8287d21a035ce86baf1101593dfc6b894dd41a030df297a786b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 60544, hash: '0e0298e2608daf7765c8636e69ea02944b3a6f6b9b7910d61f9e0d77ddc7ccf0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 30053, hash: '67ef6ddd5e453d2eda197dabb887e98fd34a8e6f353930c0c1b8d2c2c69b72fe', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 26116, hash: '6cda6f771f4842eeb2fcb7d5c1642dd3ecf0296408a7c2b007302267a31e81cb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 60544, hash: '0e0298e2608daf7765c8636e69ea02944b3a6f6b9b7910d61f9e0d77ddc7ccf0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 41584, hash: '6865e74907f4de1b6e37a21b4b991a3a5f3696b5f2d41569d2b5de9705ea7dc7', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 27589, hash: 'e8d4de49fb86c6b2a98dde7f18f087839b36b16bceea9130d363a046359773ba', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 26836, hash: 'ad8017f654bc2bec0d7692d07544b0461ca52c671c0fefb2905efefc49536593', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'About-me/index.html': {size: 32199, hash: 'd7e7a65b39ca570b23ab8f6ffd6e334d5c2710aa8dbb48cc020262c8d8c4a291', text: () => import('./assets-chunks/About-me_index_html.mjs').then(m => m.default)},
    'fille/index.html': {size: 19892, hash: '92e7ee5aa0df0c397ce86724b05bdb834d4b3120d9531cb480469b37e2547020', text: () => import('./assets-chunks/fille_index_html.mjs').then(m => m.default)},
    'project-details/index.html': {size: 24350, hash: '22f8a7fe08eb6aa20654529920e7eaa3cb03289b0fca439dbe56d0fe74e17890', text: () => import('./assets-chunks/project-details_index_html.mjs').then(m => m.default)},
    'styles-PG4NTQGW.css': {size: 38589, hash: 'itqLFsi6nug', text: () => import('./assets-chunks/styles-PG4NTQGW_css.mjs').then(m => m.default)}
  },
};
