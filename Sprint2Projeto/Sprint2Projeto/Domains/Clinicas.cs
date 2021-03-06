﻿using System;
using System.Collections.Generic;

namespace Sprint2Projeto.Domains
{
    public partial class Clinicas
    {
        public Clinicas()
        {
            Medicos = new HashSet<Medicos>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public string Cnpj { get; set; }
        public string RazaoSocial { get; set; }
        public int HorarioFuncionamento { get; set; }

        public ICollection<Medicos> Medicos { get; set; }
    }
}
