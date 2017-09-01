<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/"><a class="navbar-brand">Stock Trader</a></router-link>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" tag="li" active-class="active"><a href="#">Portfolio</a></router-link>
                    <router-link to="/stocks" tag="li" active-class="active"><a href="#">Stocks</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">End Day</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Save Data</a></li>
                            <li><a href="#">Load Data</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Funds</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>