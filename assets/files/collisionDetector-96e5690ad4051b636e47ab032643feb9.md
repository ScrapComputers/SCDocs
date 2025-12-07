---
title: "CollisionDetector"
description: "The Collision Detector component"
---

The Collision Detector can detect melee and collision events and can also return data regarding the event.

---

## Structure

### CollisionEvent

The collision event information structure.

#### Fields:
- 'other' [ **string** ] The other objects type that collided with the component.
- 'posiiton' [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The position at witch the collision occured.
- 'selfPointVelocity' [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The velocity of the component when the collision occured.
- 'otherPointVelocity' [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The velocity of the other object when the collision occured.
- 'normal' [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The normal between the component and the collision object.

---

### MeleeEvent

The melee event information structure.

#### Fields:
- 'position' [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The position in world space where the shape was hit.
- 'attacker' [ **string** ] The type of object that meleed the component.
- 'damage' [ **integer** ] The damage value of the melee attack.
- 'power' [ **number** ] The physical impact of the hit.
- 'direction' [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The direction of the melee attack.
- 'normal' [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The normal at the point of impact.

---

## Functions

### getLastCollisionEvent

```lua
CollisionDetector.getLastCollisionEvent()
```

Returns the latest collision event that occured with the component.

**Returns:**
- [ **[CollisionDetector.CollisionEvent](#collisionevent)** ] The collision event.

---

### getLastMeleeEvent

```lua
CollisionDetector.getLastMeleeEvent()
```

Returns the latest melee event that occured with the component.

**Returns:**
- [ **[CollisionDetector.MeleeEvent](#meleeevent)** ] The melee event.

---

### isColliding

```lua
CollisionDetector.isColliding()
```

Returns true if the component is actively colliding with something.

**Returns:**
- [ **boolean** ] Whether the component is colliding or not.

---

### isMeleeing

```lua
CollisionDetector.isMeleeing()
```

Returns true if the component is actively being meleed.

**Returns:**
- [ **boolean** ] Whether the component is being meleed or not.