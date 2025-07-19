# SupportHub - Система техподдержки учреждений

![SupportHub Architecture](docs/images/architecture-overview.png)

**SupportHub** - это современная система управления обращениями для учреждений с динамической маршрутизацией, real-time коммуникацией и аналитикой производительности. Разработана для обработки 50 000+ обращений в месяц от 7 000+ учреждений с распределением по группам операторов.

## 🚀 Ключевые особенности

- **Динамическая маршрутизация** обращений по тегам и группам
- **Real-time чат** с историей сообщений и уведомлениями
- **Иерархическое управление** операторами (агент → менеджер → администратор)
- **Аналитика эффективности** в реальном времени
- **Интеграция с LLM** для автоматизации ответов
- **Гибкая модульная архитектура** (микросервисы)

## ⚙️ Технологический стек

### Бэкенд
![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Fastify](https://img.shields.io/badge/Fastify-4.x-blue)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-yellow)

### Базы данных
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)
![Redis](https://img.shields.io/badge/Redis-7-red)
![ClickHouse](https://img.shields.io/badge/ClickHouse-23.x-orange)

### Фронтенд
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-5-yellow)
![MUI](https://img.shields.io/badge/Material_UI-6.x-green)

### Инфраструктура
![Docker](https://img.shields.io/badge/Docker-24.x-blue)
![Kubernetes](https://img.shields.io/badge/Kubernetes-1.28-blue)
![Terraform](https://img.shields.io/badge/Terraform-1.5.x-purple)

## 📐 Архитектура системы

```mermaid
graph TD
    A[API Gateway] --> B[Auth Service]
    A --> C[Ticket Service]
    A --> D[Chat Service]
    A --> E[Tagging Service]
    A --> F[Group Service]
    A --> G[Analytics Service]
    A --> H[Knowledge Service]
    A --> I[Integration Service]
    
    B --> J[(Auth DB)]
    C --> K[(Tickets DB)]
    D --> L[(Redis Pub/Sub)]
    F --> M[(Groups DB)]
    G --> N[(ClickHouse)]
    H --> O[(pgvector)]
```

## 🧩 Функциональные модули

| Модуль | Описание | Статус |
|--------|----------|--------|
| **Auth Core** | Управление пользователями и доступом | ✅ Готов |
| **Ticket Engine** | Жизненный цикл обращений | ✅ Готов |
| **Chat Hub** | Real-time коммуникации | ✅ Готов |
| **Tagging System** | Категоризация и тегирование | 🚧 В разработке |
| **Operator Matrix** | Управление группами операторов | 🚧 В разработке |
| **Insight Core** | Аналитика производительности | 📅 Планируется |
| **Knowledge Base** | База знаний + AI-интеграция | 📅 Планируется |

## 🚀 Быстрый старт

### Предварительные условия
- Node.js 20+
- PostgreSQL 16
- Redis 7
- Docker 24+

### Установка
```bash
# Клонировать репозиторий
git clone https://github.com/your-org/supporthub.git
cd supporthub

# Установить зависимости
npm install

# Настроить окружение
cp .env.example .env

# Запустить в режиме разработки
npm run dev
```

### Демо-режим
```bash
# Запуск с SQLite и тестовыми данными
npm run demo
```

## 🌐 Развертывание

### Docker Compose
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes
```bash
kubectl apply -f k8s/deployment/
```

### Инфраструктура как код (Terraform)
```bash
cd terraform/
terraform init
terraform apply
```

## 📚 Документация API

Доступ к Swagger UI: `http://localhost:3000/docs`

[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-green)](docs/openapi-spec.yaml)

## 🧪 Тестирование

```bash
# Запуск юнит-тестов
npm test

# Запуск интеграционных тестов
npm run test:integration

# Нагрузочное тестирование
npm run test:load
```
## 📜 Лицензия

Этот проект лицензирован под MIT License - подробности см. в файле [LICENSE](LICENSE).
