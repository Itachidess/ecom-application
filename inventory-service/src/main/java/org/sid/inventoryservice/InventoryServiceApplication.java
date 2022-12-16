package org.sid.inventoryservice;

import org.sid.inventoryservice.entities.Product;
import org.sid.inventoryservice.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.List;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }


@Bean
    CommandLineRunner start(ProductRepository productRepository, RepositoryRestConfiguration repositoryRestConfiguration)
    {
     return args -> {
         repositoryRestConfiguration.exposeIdsFor(Product.class);
         productRepository.saveAll(
                 List.of(
                         Product.builder().name("Pc").quantity(12).price(1200).build(),
                         Product.builder().name("Printer").quantity(15).price(200).build(),
                         Product.builder().name("Phone").quantity(17).price(1000).build()
                 )
         );
         productRepository.findAll().forEach(p->{
             System.out.println(p);
         });
     };
    }
}
