"""
URL configuration for PaginaFinal project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from PaginaFinal import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.index),

    path('wiki/pagina1', views.pagina1),
    path('wiki/pagina2', views.pagina2),
    path('wiki/pagina3', views.pagina3),
    path('wiki/pagina4', views.pagina4),
    path('wiki/pagina5', views.pagina5),
    path('wiki/pagina6', views.pagina6),
    path('wiki/pagina7', views.pagina7),
    path('wiki/pagina8', views.pagina8),
    path('wiki/pagina9', views.pagina9),
    path('wiki/pagina10', views.pagina10),
    path('wiki/pagina11', views.pagina11),
    path('wiki/pagina12', views.pagina12),
    path('wiki/pagina13', views.pagina13),
    path('wiki/pagina14', views.pagina14),
    path('wiki/pagina15', views.pagina15),
    path('wiki/pagina16', views.pagina16),
    path('wiki/pagina17', views.pagina17),
    path('wiki/pagina18', views.pagina18),
    path('wiki/pagina19', views.pagina19),
    path('wiki/pagina20', views.pagina20),
    path('wiki/pagina21', views.pagina21),
    path('wiki/pagina22', views.pagina22),
    path('wiki/pagina23', views.pagina23),
    path('wiki/pagina24', views.pagina24),
    path('wiki/pagina26', views.pagina26),
    path('wiki/pagina27', views.pagina27),
    path('wiki/pagina28', views.pagina28),
    path('wiki/pagina29', views.pagina29),
    path('wiki/pagina30', views.pagina30),
    path('wiki/pagina31', views.pagina31),
    path('wiki/pagina32', views.pagina32),
    path('wiki/pagina34', views.pagina34),
    path('wiki/pagina35', views.pagina35),

    path('mainshop/<str:usuario>', views.shop),
    path('shop/producto1/<str:usuario>', views.producto1),
    path('shop/producto2/<str:usuario>', views.producto2),
    path('shop/producto3/<str:usuario>', views.producto3),
    path('shop/producto4/<str:usuario>', views.producto4),
    path('shop/producto5/<str:usuario>', views.producto5),
    path('shop/producto6/<str:usuario>', views.producto6),
    path('shop/producto7/<str:usuario>', views.producto7),
    path('shop/producto8/<str:usuario>', views.producto8),
    path('shop/producto9/<str:usuario>', views.producto9),
    path('shop/producto10/<str:usuario>', views.producto10),
    path('shop/producto11/<str:usuario>', views.producto11),
    path('shop/producto12/<str:usuario>', views.producto12),
    path('shop/producto13/<str:usuario>', views.producto13),
    path('shop/producto14/<str:usuario>', views.producto14),
    path('shop/producto15/<str:usuario>', views.producto15),
    path('shop/producto16/<str:usuario>', views.producto16),
    path('shop/producto17/<str:usuario>', views.producto17),
    path('shop/producto18/<str:usuario>', views.producto18),
    path('shop/producto19/<str:usuario>', views.producto19),
    path('shop/producto20/<str:usuario>', views.producto20),


    path('auth/login', views.AuthLogin),
    path('auth/register', views.AuthRegister),

    path('contacto/', views.contact),

    path('JavaScript/Index', views.JavaScriptIndex),
    path('JavaScript/Programa1', views.JavaScriptPrograma1),
    path('JavaScript/Programa2', views.JavaScriptPrograma2),
    path('JavaScript/Programa3', views.JavaScriptPrograma3),
    path('JavaScript/Programa4', views.JavaScriptPrograma4),
    path('JavaScript/Programa5', views.JavaScriptPrograma5),
    path('JavaScript/Programa6', views.JavaScriptPrograma6),
    path('JavaScript/Programa7', views.JavaScriptPrograma7),
    path('JavaScript/Programa8', views.JavaScriptPrograma8),
    path('JavaScript/Programa9', views.JavaScriptPrograma9),
    path('JavaScript/Programa10', views.JavaScriptPrograma10),

    path('shop/agregar/<str:usuario>/<str:Nombre_Producto>/<int:cantidad>', views.Agregar),
    path('shop/agregarespecifico/<str:usuario>/<str:Nombre_Producto>/<int:cantidad>', views.AgregarEspecifico),
    path('shop/eliminar/<str:usuario>/<str:Nombre_Producto>', views.Eliminar),

]
