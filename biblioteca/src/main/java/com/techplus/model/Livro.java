package com.techplus.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String autor;
    private String data;
}
