block( 'contacts' ).elem( 'tel' )(
  replace()( ( node, ctx ) => [
    ctx.tel && {
      block: 'link',
      content: ctx.tel[node.currentLang],
      url: `tel:${ ctx.tel[node.currentLang] }`,
      mix: { block: node.block, elem: node.elem }
    }
  ] )
);
