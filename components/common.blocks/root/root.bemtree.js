const imageUrlBuilder = require( '@sanity/image-url' );
const marked = require( 'marked' );

const builder = imageUrlBuilder(
  {
    projectId: '39dycnz5',
    dataset: 'develop'
  }
);

function urlFor( source ) {
  return builder.image( source )
}

block( 'root' ).replace()( ( node, ctx ) => {
  const level = ctx.level || 'desktop';
  const config = node.config = ctx.config;
  const data = node.data = ctx.data;
  const serviceBasedData = node.data.api.serviceBasedData;
  const contacts = node._contacts = {
    tel: serviceBasedData.tel || '',
    email: serviceBasedData.email || '',
    social: [
      {
        name: 'vk',
        url: 'https://vk.com/neva.trip',
        img: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 548.358 548.358"><path d="M545.451 400.298c-.664-1.431-1.283-2.618-1.858-3.569-9.514-17.135-27.695-38.167-54.532-63.102l-.567-.571-.284-.28-.287-.287h-.288c-12.18-11.611-19.893-19.418-23.123-23.415-5.91-7.614-7.234-15.321-4.004-23.13 2.282-5.9 10.854-18.36 25.696-37.397 7.807-10.089 13.99-18.175 18.556-24.267 32.931-43.78 47.208-71.756 42.828-83.939l-1.701-2.847c-1.143-1.714-4.093-3.282-8.846-4.712-4.764-1.427-10.853-1.663-18.278-.712l-82.224.568c-1.332-.472-3.234-.428-5.712.144l-3.713.859-1.431.715-1.136.859c-.952.568-1.999 1.567-3.142 2.995-1.137 1.423-2.088 3.093-2.848 4.996-8.952 23.031-19.13 44.444-30.553 64.238-7.043 11.803-13.511 22.032-19.418 30.693-5.899 8.658-10.848 15.037-14.842 19.126-4 4.093-7.61 7.372-10.852 9.849-3.237 2.478-5.708 3.525-7.419 3.142-1.715-.383-3.33-.763-4.859-1.143-2.663-1.714-4.805-4.045-6.42-6.995-1.622-2.95-2.714-6.663-3.285-11.136-.568-4.476-.904-8.326-1-11.563-.089-3.233-.048-7.806.145-13.706.198-5.903.287-9.897.287-11.991 0-7.234.141-15.085.424-23.555.288-8.47.521-15.181.716-20.125.194-4.949.284-10.185.284-15.705s-.336-9.849-1-12.991a44.442 44.442 0 0 0-2.99-9.137c-1.335-2.95-3.289-5.232-5.853-6.852-2.569-1.618-5.763-2.902-9.564-3.856-10.089-2.283-22.936-3.518-38.547-3.71-35.401-.38-58.148 1.906-68.236 6.855-3.997 2.091-7.614 4.948-10.848 8.562-3.427 4.189-3.905 6.475-1.431 6.851 11.422 1.711 19.508 5.804 24.267 12.275l1.715 3.429c1.334 2.474 2.666 6.854 3.999 13.134 1.331 6.28 2.19 13.227 2.568 20.837.95 13.897.95 25.793 0 35.689-.953 9.9-1.853 17.607-2.712 23.127-.859 5.52-2.143 9.993-3.855 13.418-1.715 3.426-2.856 5.52-3.428 6.28-.571.76-1.047 1.239-1.425 1.427a21.387 21.387 0 0 1-7.71 1.431c-2.667 0-5.901-1.334-9.707-4-3.805-2.666-7.754-6.328-11.847-10.992-4.093-4.665-8.709-11.184-13.85-19.558-5.137-8.374-10.467-18.271-15.987-29.691l-4.567-8.282c-2.855-5.328-6.755-13.086-11.704-23.267-4.952-10.185-9.329-20.037-13.134-29.554-1.521-3.997-3.806-7.04-6.851-9.134l-1.429-.859c-.95-.76-2.475-1.567-4.567-2.427a30.301 30.301 0 0 0-6.567-1.854l-78.229.568c-7.994 0-13.418 1.811-16.274 5.428l-1.143 1.711c-.571.953-.859 2.475-.859 4.57 0 2.094.571 4.664 1.714 7.707 11.42 26.84 23.839 52.725 37.257 77.659 13.418 24.934 25.078 45.019 34.973 60.237 9.897 15.229 19.985 29.602 30.264 43.112 10.279 13.515 17.083 22.176 20.412 25.981 3.333 3.812 5.951 6.662 7.854 8.565l7.139 6.851c4.568 4.569 11.276 10.041 20.127 16.416 8.853 6.379 18.654 12.659 29.408 18.85 10.756 6.181 23.269 11.225 37.546 15.126 14.275 3.905 28.169 5.472 41.684 4.716h32.834c6.659-.575 11.704-2.669 15.133-6.283l1.136-1.431c.764-1.136 1.479-2.901 2.139-5.276.668-2.379 1-5 1-7.851-.195-8.183.428-15.558 1.852-22.124 1.423-6.564 3.045-11.513 4.859-14.846 1.813-3.33 3.859-6.14 6.136-8.418 2.282-2.283 3.908-3.666 4.862-4.142.948-.479 1.705-.804 2.276-.999 4.568-1.522 9.944-.048 16.136 4.429 6.187 4.473 11.99 9.996 17.418 16.56 5.425 6.57 11.943 13.941 19.555 22.124 7.617 8.186 14.277 14.271 19.985 18.274l5.708 3.426c3.812 2.286 8.761 4.38 14.853 6.283 6.081 1.902 11.409 2.378 15.984 1.427l73.087-1.14c7.229 0 12.854-1.197 16.844-3.572 3.998-2.379 6.373-5 7.139-7.851.764-2.854.805-6.092.145-9.712-.677-3.611-1.344-6.136-2.008-7.563z" fill="#e2b44e"/></svg>'
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/nevatrip.ru/',
        img: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 438.536 438.536"><path d="M421.981 16.562C410.941 5.519 397.711 0 382.298 0H56.248C40.83 0 27.604 5.521 16.561 16.562 5.52 27.6.001 40.828.001 56.243V382.29c0 15.413 5.518 28.644 16.56 39.683 11.043 11.04 24.272 16.563 39.687 16.563h326.046c15.41 0 28.644-5.523 39.684-16.563 11.043-11.039 16.557-24.27 16.557-39.683V56.243c-.001-15.418-5.514-28.639-16.554-39.681zM157.462 158.025c17.224-16.652 37.924-24.982 62.097-24.982 24.36 0 45.153 8.33 62.381 24.982 17.228 16.655 25.837 36.785 25.837 60.386 0 23.598-8.609 43.729-25.837 60.379-17.228 16.659-38.014 24.988-62.381 24.988-24.172 0-44.87-8.336-62.097-24.988-17.228-16.652-25.841-36.781-25.841-60.379 0-23.601 8.613-43.73 25.841-60.386zm231.403 212.564c0 4.945-1.718 9.083-5.141 12.416-3.433 3.33-7.519 4.996-12.282 4.996h-305.2c-4.948 0-9.091-1.666-12.419-4.996-3.333-3.326-4.998-7.471-4.998-12.416V185.575H89.08c-3.805 11.993-5.708 24.462-5.708 37.402 0 36.553 13.322 67.715 39.969 93.511 26.65 25.786 58.721 38.685 96.217 38.685 24.744 0 47.583-5.903 68.527-17.703 20.937-11.807 37.486-27.839 49.676-48.112 12.183-20.272 18.274-42.4 18.274-66.38 0-12.94-1.91-25.406-5.715-37.402h38.547V370.59h-.002zm0-254.963c0 5.52-1.903 10.184-5.716 13.99-3.805 3.809-8.466 5.711-13.989 5.711h-49.676c-5.517 0-10.185-1.903-13.99-5.711-3.806-3.806-5.708-8.47-5.708-13.99V68.522c0-5.33 1.902-9.945 5.708-13.848 3.806-3.901 8.474-5.854 13.99-5.854h49.676c5.523 0 10.185 1.952 13.989 5.854 3.812 3.903 5.716 8.518 5.716 13.848v47.104z" fill="#e2b44e"/></svg>'
      }
    ]
  };

  const meta = data.meta || {};
  const og = meta.og || {};

  if( ctx.context ) return ctx.context;

  return {
    block: 'page',
    title: data.title || config.appName,
    favicon: '/favicon.ico',
    itemtype: 'http://schema.org/LocalBusiness',
    prefix: 'og: http://ogp.me/ns#',

    styles: { elem: 'css', url: `/assets/css/${ data.page }.${ data.params.project }-${ level }.min.css` },
    scripts: { elem: 'js', url: `/assets/js/${ data.page }.${ data.params.project }-${ level }.min.js` },
    head: [
      // { elem: 'meta', attrs: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' } },
      // { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' } },

      // favicons
      // { elem: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href:'/apple-touch-icon.png' } },
      // { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href:'/favicon-32x32.png' } },
      // { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href:'/favicon-16x16.png' } },
      // { elem: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
      // { elem: 'link', attrs: { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color:'#309acd' } },
      // { elem: 'meta', attrs: { name: 'msapplication-TileColor', content: '#309acd' } },
      // { elem: 'meta', attrs: { name: 'theme-color', content: '#309acd' } },

      // meta
      // { elem: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: 'name' } },
      // { elem: 'meta', attrs: { name: 'application-name', content: config.appName } },
      // { elem: 'meta', attrs: { name: 'description', content: meta.description } },
      // { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title || config.appName } },
      // { elem: 'meta', attrs: { property: 'og:description', content: meta.description } },
      // { elem: 'meta', attrs: { property: 'og:url', content: og.url || data.url.pathname } },
      // { elem: 'meta', attrs: { property: 'og:image', content: og.image } },
      // { elem: 'meta', attrs: { property: 'og:image:width', content: "279" } },
      // { elem: 'meta', attrs: { property: 'og:image:height', content: "279" } },
      // { elem: 'meta', attrs: { property: 'og:site_name', content: config.appName } },
      // { elem: 'meta', attrs: { property: 'og:locale', content: 'ru_RU' } }, //TODO add lang
      // { elem: 'meta', attrs: { property: 'og:type', content: 'website' } }

    ]

    // mods: { route: node.data.view || node.data.page, js: true }
  };
} );
