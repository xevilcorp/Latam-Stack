# Latam Stack — Institutional Enterprise Platform

> **Infraestrutura de software corporativo e sistemas ERP para manufatura industrial e comércio exterior na América Latina.**

[![Status](https://img.shields.io/badge/Status-Produ%C3%A7%C3%A3o-0c3a6b.svg)](https://latamstack.com)
[![Compliance](https://img.shields.io/badge/Compliance-SPED%20%2F%20Siscomex-10b981.svg)](https://latamstack.com)
[![Stack](https://img.shields.io/badge/Tech-HTML5%20%2F%20CSS3%20%2F%20Vanilla%20JS-111317.svg)](https://latamstack.com)

---

## Visão Geral

A **Latam Stack** desenvolve soluções de software de gestão empresarial (ERP) e infraestrutura digital desenhadas especificamente para atender às complexidades fiscais, produtivas e aduaneiras do mercado latino-americano, com foco inicial no setor industrial brasileiro.

Diferente de sistemas legados ou soluções genéricas que dependem de remendos manuais, a arquitetura une em uma única esteira contínua:
1. **Inteligência de Mercado e Agentes HS**: Varredura autônoma de balanças comerciais e códigos WCO HS / NCM para identificar demandas internacionais e compradores qualificados.
2. **Desembaraço e Documentação de Comércio Exterior**: Geração e validação nativa de Bill of Lading (BL), Declarações de Importação (DI/DUIMP), Declaração Única de Exportação (DU-E), packing lists e hedge cambial integrado.
3. **ERP Industrial & Chão de Fábrica**: Estrutura multinível de produtos (BOM), apontamento em tempo real, ordens de produção e controle de estoques multidepósito (incluindo armazéns alfandegados e recintos CLIA).
4. **Motor Fiscal Nativo**: Emissão de alta performance de NF-e, NFS-e, MDF-e, escrituração do SPED Fiscal (Blocos K e H) e conformidade antecipada com o IVA Dual (CBS/IBS) da Reforma Tributária.
5. **Custo Landed Real**: Apropriação matemática de fretes internacionais, taxas portuárias e tributos de importação diretamente no custo unitário de cada lote fabril.

---

## Princípios de Design & Identidade Institucional

Este repositório contém a **landing page institucional estática** da Latam Stack, concebida sob rigorosos critérios de **austeridade, conformidade e profissionalismo corporativo**:

- **Anti-AI Slop**: Rejeição deliberada a gradientes roxos/neon, badges excessivos, hologramas sintéticos e conteúdos escondidos atrás de abas.
- **Fotografia Curada de Escala Real**: Imagens documentais autênticas de navios de carga, plantas industriais de precisão e terminais intermodais.
- **Transição Cinematográfica Fluida**: Hero dinâmico com crossfade suave e indicadores temporais discretos.
- **Performance Pura**: Zero dependências de frameworks externos; HTML5 semântico, CSS3 arquitetural e JavaScript puro.

---

## Estrutura do Repositório

```bash
LatamStack/
├── assets/
│   ├── logo.jpg          # Identidade oficial Latam Stack
│   ├── hero-1.jpg        # Fotografia: Logística marítima e comércio exterior
│   ├── hero-2.jpg        # Fotografia: Manufatura contínua e precisão fabril
│   ├── hero-3.jpg        # Fotografia: Terminais intermodais e infraestrutura
│   ├── comex.jpg         # Fotografia: Desembaraço e pátio de contêineres
│   ├── erp.jpg           # Fotografia: Chão de fábrica e apontamento
│   └── logistics.jpg     # Fotografia: Centro logístico e custos landed
├── index.html            # Landing page institucional estruturada
├── styles.css            # Folha de estilos corporativa com variáveis de design
├── script.js             # Controlador vanilla JS (slideshow e navegação)
├── .gitignore            # Arquivos ignorados pelo controle de versão
└── README.md             # Documentação do projeto
```

---

## Execução Local

Para visualizar a landing page localmente, utilize qualquer servidor web estático:

```powershell
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Acesse em seu navegador em `http://localhost:8080`.

---

## Publicação & Hospedagem

O projeto é 100% estático e compatível com:
- **GitHub Pages**: Configure a branch `main`/`master` na raiz (`/`).
- **Cloudflare Pages**: Aponte para a raiz sem comando de build.
- **Vercel / Netlify**: Deploy imediato sem configuração de pipeline.
- **AWS S3 + CloudFront**: Hospedagem estática de ultra-baixa latência.

---

## Licença & Direitos

&copy; 2026 **LATAM STACK TECNOLOGIA S.A.** Todos os direitos reservados.
São Paulo &bull; Brasil &bull; Registro Comercial e Soberania Tecnológica Nacional.
