
from django.urls import path

from . import views

urlpatterns = [
    path('dashboard', views.dashboard_page, name='dashboard_page'),
    path('api/dashboard', views.DashboardAPI.as_view(), name='dashboard_apis'),

    path('create', views.create_page, name='create_page'),
    path('api/create', views.CreateAPI.as_view(), name='create_apis'),
]
