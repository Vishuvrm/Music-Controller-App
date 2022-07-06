from django.db import models
import string
import random

def generate_unique_code(length = 6):
    choices = string.ascii_uppercase + "0123456789"
    while True:
        code = ''.join(random.choices(choices, k=length))
        if Room.objects.filter(code=code).count() == 0:
            return code


# Create your models here.
class Room(models.Model):
    """
    host
    guest_can_pause # PERMISSION FOR GUEST TO PAUSE OR PLAY THE MUSIC
    unique code # Unique code that identifies the room
    votes_to_skip 
    """

    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True) # Atmost 1 host for 1 room, thus unique
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)