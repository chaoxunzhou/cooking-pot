from django.db import models
from django.contrib.auth.models import User


class FoodList(models.Model):
    name = models.CharField(max_length=255)
    ingredians = models.CharField(max_length=255)
    introduction = models.CharField(max_length=255)
    cooking = models.CharField(max_length=255)
    culture = models.CharField(max_length=255)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name + " " + str(self.user)
