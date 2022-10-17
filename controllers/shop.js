exports.getIndex = (req, res, next) => {
    res.render("shop/index", {
        pageTitle: "Index",
        path: '/'
    })
}

exports.getCard = (req, res, next) => {
    res.render("shop/cart", {
        pageTitle: "Cart",
        path: "/cart"
    })
}

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        pageTitle: "Checkout",
        path: "/checkout"
    })
}