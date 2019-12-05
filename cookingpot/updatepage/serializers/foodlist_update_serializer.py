from rest_framework import serializers


class FoodlistUpdateSerializer(serializers.Serializer):
    name = serializers.CharField(required=True)
    ingredians = serializers.CharField(required=True)
    introduction = serializers.CharField(required=True)
    cooking = serializers.CharField(required=True)
    culture = serializers.CharField(required=True)

    def update(self, object, validated_data):
        name = validated_data.get('name', None)
        ingredians = validated_data.get('ingredians', None)
        introduction = validated_data.get('introduction', None)
        cooking = validated_data.get('cooking', None)
        culture = validated_data.get('culture', None)

        object.name = name
        object.ingredians = ingredians
        object.introduction = introduction
        object.cooking = cooking
        object.culture = culture
        object.save()
