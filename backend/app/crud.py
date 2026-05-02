from . import models

def create_like(db, image_url, breed):
    like = models.Like(image_url=image_url, breed=breed)
    db.add(like)
    db.commit()
    return like

def delete_like(db, image_url):
    db.query(models.Like).filter(models.Like.image_url == image_url).delete()
    db.commit()

def get_likes(db):
    return db.query(models.Like).all()

def add_viewed(db, breed):
    db.add(models.Viewed(breed=breed))
    db.commit()

    records = db.query(models.Viewed).all()
    if len(records) > 5:
        db.delete(records[0])
        db.commit()

def get_viewed(db):
    return db.query(models.Viewed).all()