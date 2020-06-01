from django.contrib import admin
from django.urls import path
from .views import TestClass

urlpatterns = [
    path('', TestClass.as_view()),
]
