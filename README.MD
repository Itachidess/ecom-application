<h2>1.Créer le micro-service customer-service qui permet de gérer les client</h2>
<img src="screens/img.PNG">
<img src="screens/img_2.PNG">
<img src="screens/img_3.PNG">

<h2>1.Créer le micro-service customer-service qui permet de gérer les client</h2>
<img src="screens/img_16.PNG">

<h2>3. Créer la Gateway Spring cloud Gateway</h2>
<p>Ici on retrouve le port de la Gateway 9999</p>
<img src="screens/img_17.PNG">
<img src="screens/img_18.PNG">

<h2>4. Configuration statique du système de routage</h2>
<p>Routage Statique</p>
<img src="screens/img_19.PNG">

<h2>5. Créer l'annuaire Eureka Discrovery Service</h2>
<p>Pour cela on crée un DiscoveryService on lui donnant le port 8761
<img src="screens/img_20.PNG">
<p>On remarque sur le screen ci-dessous qu'il y'a les differents micro-services en marche.
<img src="screens/img_21.PNG">

<h2>6. Faire une configuration dynamique des routes de la gateway</h2>
<p>Configuration systeme pour les routes dynamiques<p>
<img src="screens/img_22.PNG">
<p>Pour cet exemple on rentre par le nom du micro Service en question (CUSTOMER-SERVICE)
<img src="screens/img_10.PNG">

<h2>7. Créer le service de facturation Billing-Service en utilisant Open Feign</h2>
<p>On utilise le Feign au  niveau de Produit et de Customer <p>
<img src="screens/img_23.PNG">
<img src="screens/img_24.PNG">
<img src="screens/img_25.PNG">
<img src="screens/img_26.PNG">

<h2>8. Créer un client Web Angular (Clients, Produits, Factures)</h2>
    <h3>Angular Clients<h3>
    <img src="screens/img_27.PNG">
    <h3>Angular Produits<h3>
    <img src="screens/img_28">
    <h3>Angular Factures<h3>
    <img src="screens/img_29">