from rest_framework import serializers
from foundations.models import FoodList


class DashboardSerializer(serializers.BaseSerializer):
    def to_representation(self, foodlist):
        """
        Get the list of instruments and perform our computations.
        """
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
