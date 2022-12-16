<h2>1.Créer le micro-service customer-service qui permet de gérer les client</h2> 
<img src="screens/img.png">
<img src="screens/img_2.png">
<img src="screens/img_3.png">
<h2>2.Créer le micro-service inventory-service qui permet de gérer les produits</h2>
<img src="screens/img_16.png">
<h2>3. Créer la Gateway Spring cloud Gateway</h2>
<p>Ici on retrouve le port de la Gateway 9999</p>
<img src="screens/img_17.png">
<img src="screens/img_18.png">
<h2>4. Configuration statique du système de routage</h2>
<p>Routage Statique</p>
<img src="screens/img_19.png">
<h2>5. Créer l'annuaire Eureka Discrovery Service</h2>
<p>Pour cela on crée un DiscoveryService on lui donnant le port 8761
<img src="screens/img_20.png">
<p>On remarque sur le screen ci-dessous qu'il y'a les differents micro-services en marche.
<img src="screens/img_21.png">
<h2>6. Faire une configuration dynamique des routes de la gateway</h2>
<p>Configuration systeme pour les routes dynamiques<p>
<img src="screens/img_22.png">
<p>Pour cet exemple on rentre par le nom du micro Service en question (CUSTOMER-SERVICE)
<img src="screens/img_10.png">
<h2>7. Créer le service de facturation Billing-Service en utilisant Open Feign</h2>
<p>On utilise le Feign au  niveau de Produit et de Customer <p>
<img src="screens/img_23.png">
<img src="screens/img_24.png">
<img src="screens/img_25.png">
<img src="screens/img_26.png">
<h2>8. Créer un client Web Angular (Clients, Produits, Factures)</h2>
    <h3>Angular Clients<h3>
    <img src="screens/img_27.png">
    <h3>Angular Produits<h3>
    <img src="screens/img_28.png">
    <h3>Angular Factures<h3>
    <img src="screens/img_29.png">