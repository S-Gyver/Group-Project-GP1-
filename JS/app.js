// รอให้หน้าเว็บโหลดเสร็จสมบูรณ์ก่อน (เป็น Best Practice)
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ค้นหาฟอร์มติดต่อด้วย ID ที่เราตั้งไว้ (contactForm)
    const contactForm = document.getElementById('contactForm');
    
    // 2. ตรวจสอบก่อนว่าฟอร์มนี้มีอยู่ในหน้าเพจจริงหรือไม่
    // (เพื่อป้องกัน Error ในหน้าอื่นที่ไม่มีฟอร์มนี้)
    if (contactForm) {
        
        // 3. เพิ่ม Event Listener เพื่อ "ดักฟัง" ตอนที่ฟอร์มถูก "submit"
        contactForm.addEventListener('submit', function(event) {
            
            // 4. (สำคัญมาก) หยุดการทำงานปกติของฟอร์ม
            //    (ป้องกันไม่ให้หน้าเว็บรีเฟรช)
            event.preventDefault(); 
            
            // 5. แสดง Alert ตามที่คุณต้องการ
            alert('ส่งข้อความเรียบร้อยแล้ว! ขอบคุณสำหรับการติดต่อครับ');
            
            // 6. (แนะนำ) สั่งให้ฟอร์มล้างข้อมูลที่กรอกไว้ทั้งหมด
            contactForm.reset();
        });
    }

});