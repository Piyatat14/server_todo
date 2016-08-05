# server_todo

Sample RESTful API backend to do task list.

#instruction

เมื่อ clone project เสร็จแล้ว ให้ทำตามขั้นตอนดังต่อไปนี้

1. เข้าไปที่ folder project ที่เราทำการ clone มาหลังจากนั้นให้ลองใช้คำสั่ง node server.js (กรณีไม่มี error เกิดขึ้นสามารถใช้ได้ทันที)

  กรณีที่มี error เกิดขึ้น ให้ทำตามขั้นตอนดังนี้
  
  - install node.js
  - ใช้คำสั่ง npm install (เพื่อติดตั้่ง Module ที่นำเข้ามาใช้ในเซิร์ฟเวอร์)
  
*** ไฟล์ sql อยู่ใน folder sql ก่อนทำการใช้งานเซิร์ฟเวอร์นำไฟล์ไป import ลงใน mysql database ด้วยครับ ***
  
#API document

3 parameter ที่ใช้ 1. name[VARCHAR@100] 2. description[TEXT] 3. status[SET@TRUE,FALSE]

http://localhost:3000/api/getAllTask                  ใช้ในการเรียกดู Task ทั้งหมด
http://localhost:3000/api/getTaskById/2               ใช้ในการเรียกดู Task id ที่ 2
http://localhost:3000/api/addTask                     ใช้ในการสร้าง Task ใหม่                      param[name, description, status]
http://localhost:3000/api/editNameById/2              ใช้ในการแก้ไขชื่อของ Task id ที่ 2               param[name]
http://localhost:3000/api/editDescById/2              ใช้ในการแก้ไขคำอธิบายเพิ่มเติมของ Task id ที่ 2     param[description]
http://localhost:3000/api/editStatusById/2            ใช้ในการแก้ไขสถานะของ Task id ที่ 2             param[status]
http://localhost:3000/api/editTaskById/2              ใช้ในการแก้ไขข้อมูลทั้งหมดของ Task id ที่ 2         param[name, description, status]
http://localhost:3000/api/deleteTaskById/2            ใช้ในการลบข้อมูล Task id ที่ 2


#Format data

ใช้ JSON ในการส่ง parameter ได้เลยครับ เช่น

{
  "name": "dinner",
  "description": "at 7.00pm",
  "status": "false"
}
