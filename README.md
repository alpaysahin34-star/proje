# Seller Command Center

E-ticaret satıcılarının günlük operasyonlarını tek ekrandan yönetebilmesi için hazırlanmış Helpigo benzeri gelişmiş panel prototipi.

## Özellikler

- Çoklu pazar yeri sağlık görünümü
- Net ciro, tahmini kar, SLA ve aksiyon KPI'ları
- Ciro, kar ve reklam harcaması grafiği
- Öncelikli sipariş, iade ve fatura aksiyon kuyruğu
- SKU bazlı marj, stok ve trend tablosu
- AI soru-cevap, reklam bütçe koruması ve stok otomasyonu kartları

## Teknoloji

- Next.js App Router
- TypeScript
- Recharts
- Lucide React ikonları
- Saf CSS ile responsive koyu panel teması

## Geliştirme

```bash
npm install
npm run dev
```

Kontrol komutları:

```bash
npm run typecheck
npm run lint
npm run build
```

## Sonraki entegrasyon adımları

1. Pazar yeri API kimlik bilgileri için güvenli ayar ekranı
2. Sipariş, komisyon, kargo, reklam ve iade verileri için kalıcı veri modeli
3. Satıcı bazlı yetkilendirme ve tenant izolasyonu
4. AI önerileri için insan onaylı yayın akışı
5. CSV/Excel dışa aktarma ve zamanlanmış raporlar
