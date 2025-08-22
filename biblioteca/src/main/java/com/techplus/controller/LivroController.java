package com.techplus.controller;

import com.techplus.model.Livro;
import com.techplus.repository.LivroRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livros")
@CrossOrigin(origins = "*") // Permite acesso do Vue
public class LivroController {

    private final LivroRepository repository;

    public LivroController(LivroRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Livro> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Livro salvar(@RequestBody Livro livro) {
        return repository.save(livro);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
