from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import response, views, status

from foundations.models import FoodList
from .serializers import DashboardSerializer


def dashboard_page(request):
    return render(request, "dashboard/dashboard.html", {
        'user': request.user,
    })


class DashboardAPI(views.APIView):
    def get(self, request):
        foodlist = FoodList.objects.filter(user=request.user)
        serializer = DashboardSerializer(foodlist)
        return response.Response(
            status=status.HTTP_200_OK,
            data=serializer.data,
        )
