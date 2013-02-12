var app=require("app-bp");

var staticController={
    name:"site",
    routes:{
        get:{
            '/':'site.noop@jinja:index',
            '/index':'site.noop@jinja:index',
            '/portfolio':'site.noop@jinja:portfolio'
        }
    },
    noop : function () {
        this.renderer({});
    }
};

app.useDb('site');
app.runControllers({

    site:staticController

});
