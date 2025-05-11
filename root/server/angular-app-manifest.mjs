
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    'index.csr.html': {size: 658, hash: 'e455e5ab206ff243ebf2fa4090d1a170d46d9da8550490db59b61f9e4e451c04', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 986, hash: '2369f63aaa2a1a35eceae529ca11ebc627259fef9450410b153381fdb2a00cd1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 60516, hash: 'f0f01d7f57c8c8c340735a01871203e098e358e40826327d96ae020a9f96694b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 60516, hash: 'f0f01d7f57c8c8c340735a01871203e098e358e40826327d96ae020a9f96694b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 30025, hash: '65f5d8406dbc77043a9729bc4cadd3880a9e591ecd606782c599e43975ce8a3f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 41556, hash: 'a23fef84c14a47d7d265dc4d99ef342d0d66a207d96100fc5e0e6cc83bcc50f7', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 26088, hash: '482a769d4c54f54d1af7f5bf308d613fc309b1630f3fc01533811d544a3c785d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'project-details/index.html': {size: 24322, hash: '5ab64f8be0cf261fa6ad20811803917028fdefd792be2c10ad2a6b7abe7f4755', text: () => import('./assets-chunks/project-details_index_html.mjs').then(m => m.default)},
    'About-me/index.html': {size: 32171, hash: '297bb8a32945b4e0879ee2ccd006d20b58bd57519b8ce375ffa8857471588c45', text: () => import('./assets-chunks/About-me_index_html.mjs').then(m => m.default)},
    'fille/index.html': {size: 19864, hash: 'd342a6904ff5c8ccac38db14f64659fdd9007db2244fb7544ea850f32cd1e8aa', text: () => import('./assets-chunks/fille_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 26808, hash: '85c80ce1e05b76e20c21eca5281d45498de6330fa1f0c325f93f594286c1d504', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 27561, hash: '13ed84a7904482c2f4e069974ceb9de6297ff0854427464c237075d94d5a4cd2', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-PG4NTQGW.css': {size: 38589, hash: 'itqLFsi6nug', text: () => import('./assets-chunks/styles-PG4NTQGW_css.mjs').then(m => m.default)}
  },
};
