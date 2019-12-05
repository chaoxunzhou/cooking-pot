"""
updatepage/views.py
"""
from django.http import HttpResponse, JsonResponse
# from django.contrib.auth.models import User
from django.shortcuts import render # STEP 1 - Import
from django.shortcuts import redirect
from foundations.models import FoodList
from rest_framework import status, response, views

# from .serializers import InstrumentRetrieveSerializer

def food_update_page(request, id):
    return render(request, "updatepage/foodupdate.html", {
        "foodlist_id": int(id),
    })


class FoodlistUpdateAPI(views.APIView):
    def put(self, request, id):
        foodlist = FoodList.objects.get(id=id)
        serializer = FoodlistUpdateSerializer(foodlist, data=request.data, many=False)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(
            status=status.HTTP_200_OK,
            data={
                'Updated foodlist'
            }
        )
