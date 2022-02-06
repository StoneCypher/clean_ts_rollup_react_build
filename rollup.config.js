
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs    from '@rollup/plugin-commonjs';
import replace     from '@rollup/plugin-replace';





const es6_module = {

  input     : 'build/typescript/index.js',

  output    : {
    file      : 'build/rollup/index.js',
    format    : 'es',
    name      : 'build_ex',
    sourcemap : false,
  },

  plugins   : [

    nodeResolve({
      module         : true,
      jsnext         : true,
      browser        : true,
      extensions     : [ '.js', '.jsx', '.ts', '.tsx' ],
      preferBuiltins : false
    }),

    commonjs({
      include: 'node_modules/**'
    }),

    replace({
      'preventAssignment'    : true,
      'process.env.NODE_ENV' : JSON.stringify( 'production' )
    })

  ]

};





const iife = {

  input     : 'build/typescript/index.js',

  output    : {
    file      : 'build/rollup/index.iife.js',
    format    : 'iife',
    name      : 'build_ex',
    sourcemap : false,
  },

  plugins   : [

    nodeResolve({
      module         : true,
      jsnext         : true,
      browser        : true,
      extensions     : [ '.js', '.jsx', '.ts', '.tsx' ],
      preferBuiltins : false
    }),

    commonjs({
      include: 'node_modules/**'
    }),

    replace({
      'preventAssignment'    : true,
      'process.env.NODE_ENV' : JSON.stringify( 'production' )
    })

  ]

};





const cjs = {

  input     : 'build/typescript/index.js',

  output    : {
    file      : 'build/rollup/index.cjs.js',
    format    : 'commonjs',
    name      : 'build_ex',
    sourcemap : false,
  },

  plugins   : [

    nodeResolve({
      module         : true,
      jsnext         : true,
      browser        : true,
      extensions     : [ '.js', '.jsx', '.ts', '.tsx' ],
      preferBuiltins : false
    }),

    commonjs({
      include: 'node_modules/**'
    }),

    replace({
      'preventAssignment'    : true,
      'process.env.NODE_ENV' : JSON.stringify( 'production' )
    })

  ]

};





export default [ es6_module, iife, cjs ];
