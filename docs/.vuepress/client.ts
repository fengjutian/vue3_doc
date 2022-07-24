import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({

  // extra tags in `<head>`

  // site-level locales config
  enhance({ app, router, siteData }) {
    console.log(app);
    console.log(router);
    console.log(siteData);
    
    

  },
  setup() {},
  rootComponents: [],
})