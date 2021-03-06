'use strict';

var index = require('./index-f0425e65.js');

/* components/Menu.svelte generated by Svelte v3.20.1 */

const css = {
	code: ".Menu.svelte-h6nama.svelte-h6nama{display:flex}.Menu.svelte-h6nama a.svelte-h6nama{margin-right:1rem}",
	map: "{\"version\":3,\"file\":\"Menu.svelte\",\"sources\":[\"Menu.svelte\"],\"sourcesContent\":[\"<div class=\\\"Menu\\\">\\n\\t<a href=\\\"/\\\">Home</a>\\n\\t<a href=\\\"/fruits\\\">Fruits</a>\\n</div>\\n\\n<style lang=\\\"scss\\\">.Menu {\\n  display: flex; }\\n  .Menu a {\\n    margin-right: 1rem; }\\n/*# sourceMappingURL=components/Menu.svelte.map */</style>\"],\"names\":[],\"mappings\":\"AAKmB,KAAK,4BAAC,CAAC,AACxB,OAAO,CAAE,IAAI,AAAE,CAAC,AAChB,mBAAK,CAAC,CAAC,cAAC,CAAC,AACP,YAAY,CAAE,IAAI,AAAE,CAAC\"}"
};

const Menu = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);

	return `<div class="${"Menu svelte-h6nama"}"><a href="${"/"}" class="${"svelte-h6nama"}">Home</a>
	<a href="${"/fruits"}" class="${"svelte-h6nama"}">Fruits</a>
</div>`;
});

exports.Menu = Menu;
