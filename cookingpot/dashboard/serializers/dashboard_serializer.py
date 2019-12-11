from rest_framework import serializers
from foundations.models import FoodList


class DashboardSerializer(serializers.BaseSerializer):
    def to_representation(self, foodlist):
        results = []
        for food in foodlist:
            results.append({
                'id': food.id,
                'name': food.name,
                'ingredians':food.ingredians,
                'culture':food.culture,
            })
        return {
            'results': results,
        }
