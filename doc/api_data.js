define({ "api": [  {    "type": "post",    "url": "bot_domain/purchase/product_qty",    "title": "通知number",    "name": "set_current_product",    "group": "Bot_API",    "description": "<p>消費者點選四格選單(Webview)。 知識要發送給bot的資料。</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page_id",            "description": "<p>粉絲團的id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page_token",            "description": "<p>粉絲團的token</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mid",            "description": "<p>消費者id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pid",            "description": "<p>產品id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pname",            "description": "<p>產品名稱</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "pnumber",            "description": "<p>產品數量(這次訂購的)</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>success</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "example/example.js",    "groupTitle": "Bot_API"  },  {    "type": "post",    "url": "bot_domain/member_action/menu/purchase",    "title": "四格 menu 的 item",    "name": "set_menu_item",    "group": "Bot_API",    "description": "<p>消費者點擊 四格menu(Webview)。 要發送給bot的資料。</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page_id",            "description": "<p>粉絲團的id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page_token",            "description": "<p>粉絲團的token</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mid",            "description": "<p>消費者id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>success</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "example/example.js",    "groupTitle": "Bot_API"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "example/main.js",    "group": "_Users_chris_case_fansbee_doc_apidoc_demo_example_main_js",    "groupTitle": "_Users_chris_case_fansbee_doc_apidoc_demo_example_main_js",    "name": ""  },  {    "type": "get",    "url": "/user/:id",    "title": "a",    "name": "a",    "group": "just_try",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "example/example.js",    "groupTitle": "just_try"  },  {    "type": "post",    "url": "/user/",    "title": "b",    "name": "b",    "group": "just_try",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "firstname",            "description": "<p>Optional Firstname of the User.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "lastname",            "description": "<p>Mandatory Lastname.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "country",            "defaultValue": "DE",            "description": "<p>Mandatory with default value &quot;DE&quot;.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "age",            "defaultValue": "18",            "description": "<p>Optional Age with default 18.</p>"          }        ],        "Login": [          {            "group": "Login",            "type": "String",            "optional": false,            "field": "pass",            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "example/example.js",    "groupTitle": "just_try"  }] });
