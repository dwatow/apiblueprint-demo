/**
 * @api {post} bot_domain/webview_action/:webview/:action 四格 menu 的 item
 * @apiName set menu item
 * @apiGroup Bot API
 *
 * @apiDescription 消費者點擊 四格menu(Webview)。
 * 要發送給bot的資料。
 *
 * @apiParam {String} webview 從menu點擊 webview，使用: menu
 * @apiParam {String} action 點擊webview的內容。在此使用: purchase
 * @apiParam {String} page_token 粉絲團的token
 * @apiParam {String} mid 消費者id
 *
 * @apiSuccess {String} text success
 */

/**
 * @api {post} bot_domain/webview_action/:webview/:action 通知number
 * @apiName set current product
 * @apiGroup Bot API
 *
 * @apiDescription 消費者點選四格選單(Webview)。
 * 知識要發送給bot的資料。
 *
 * @apiParam {String} webview 從menu點擊 webview，使用: menu
 * @apiParam {String} action 點擊webview的內容。在此使用: purchase
 * @apiParam {String} page_token 粉絲團的token
 * @apiParam {String} mid 消費者id
 *
 * @apiParam {String} product_name 產品名稱
 * @apiParam {Number} number 購買的產品數量
 *
 * @apiSuccess {String} text success
 */

/**
 * @api {get} /user/:id a
 * @apiName a
 * @apiGroup just try
 *
 * @apiParam {Number} id Users unique ID.
 */

/**
 * @api {post} /user/ b
 * @apiName b
 * @apiGroup just try
 *
 * @apiParam {String} [firstname]  Optional Firstname of the User.
 * @apiParam {String} lastname     Mandatory Lastname.
 * @apiParam {String} country="DE" Mandatory with default value "DE".
 * @apiParam {Number} [age=18]     Optional Age with default 18.
 *
 * @apiParam (Login) {String} pass Only logged in users can post this.
 *                                 In generated documentation a separate
 *                                 "Login" Block will be generated.
 */
