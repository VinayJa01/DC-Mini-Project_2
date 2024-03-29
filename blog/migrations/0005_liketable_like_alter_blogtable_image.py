# Generated by Django 4.2.6 on 2024-02-17 04:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_blogtable_image_delete_imagetable'),
    ]

    operations = [
        migrations.AddField(
            model_name='liketable',
            name='like',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='blogtable',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='blogimages/'),
        ),
    ]
