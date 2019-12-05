"""
updatepage/urls.py
"""
from django.urls import path

from . import views

urlpatterns = [
    # path('instrument/create', views.i_create_page, name='i_create_page'),
    path('foodlist/<int:id>', views.food_update_page, name='food_update_page'),
    path('api/foodlist/<int:id>', views.FoodlistUpdateAPI.as_view(), name='food_update_api'),
]
