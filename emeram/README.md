# eMeram
Bu projede ReactJS, Vite, [Google Firebase](https://firebase.google.com/)  kullanılmıştır.

### Kurulum

 1. İlk olarak [Google Firebase](https://firebase.google.com/)  'den **emeramauth**  adında bir **Web App** oluşturmalısınız.
 
 2. Oluşturduğunuz projede iki adet veritabanı daha oluşturucaksınız bunlar **Authentication** ve **Firestore Database** .
	 
	 - **Authentication:** Sign-in providers kısmını **Email/Password**  olarak ayarlıyoruz.
	 - **Firestore Database:**  Bu kısımda toplam da  altı adet collection olması gerekiyor bunlar:
	 
		 **egitimler(baslik,url,yazi)**: Url kısmına YouTube video id girmelisiniz.
		 
		 **gorusler(baslik,cevap,kadi,yazi)**:  "kadi" kısmı gönderen kullanıcının mail 		
			  adresini içerir.
			  
		 **haberler(baslik,yazi)**
		 
		 **iletisimbilgileri(adres,email,googlemap,telefon)**: "googlemap" kısmında 	 
		 GoogleMap'de belirttiğiniz adresin linkini girmeniz gerekiyor.
		 
		**projeler(baslik,durum,yazi)**:  "durum" kısmı iki türlüdür;
			**fin:** Bu etiket bitmiş projeler içindir.	
			**dvm:** Bu etiket devam eden projeler içindir.	
	  **users(address,email,name,phone,surname,userrole)**: "userrole" kısmında 	   	Google Firebase de **Admin** yetkisi vermek isteğiniz kullanıcı için "Admin" 	   yazmanız yeterli olacaktır. Admin paneline erişebilmek içinde **/adminpanel**  yazmanız yeterlidir.

 3. Oluşturduğunuz projenin config bilgilerini almak için **Project Overview** kısmında olan **ayarlar** simgesine tıklayıp **Your Apps** 'i buluyoruz. Burada **SDK setup and configuration** **Config** seçiyoruz. 
 4.  Config kısmındaki **apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId** alanlarındaki bilgileri "**/src/firebas.js**" ve "**/src/firestore.js**" 'nin içindeki ilgili alana yazıyoruz.
