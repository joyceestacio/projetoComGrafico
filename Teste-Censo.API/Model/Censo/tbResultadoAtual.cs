using System;
using System.Collections.Generic;

namespace Censo.API.Model.Censo
{
    public partial class TbResultadoAtual
    {
        public long Id { get; set; }
        public string Resultado { get; set; }
        public string Parametro { get; set; }
        public string Resumo { get; set; }
        public string Professores { get; set; }
    }
}
