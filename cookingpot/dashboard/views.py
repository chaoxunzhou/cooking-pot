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


def create_page(request):

    return render(request, "dashboard/createpage.html", {})


class CreateAPI(views.APIView):
    def post_instruments_create_api(request):
        name = request.POST.get("name")
        ingredians = request.POST.get("ingredians")
        introduction = request.POST.get("introduction")
        cooking = request.POST.get("cooking")
        culture = request.POST.get("culture")
        try:
            foodlist = FoodList.objects.create(
                name=name,
                ingredians=ingredians,
                introduction=introduction,
                cooking=cooking,
                culture=culture,
                user=request.user,
            )
            return JsonResponse({
             'was_created': True,
            })
        except Exception as e:
            return JsonResponse({
             'was_created': False,
             'reason': str(e),
            })
