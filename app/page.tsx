import {
  ArrowRight,
  Bell,
  CalendarClock,
  ChevronRight,
  Download,
  Filter,
  Globe2,
  Layers3,
  LineChart,
  Search,
  Settings,
  Store,
  WandSparkles,
} from "lucide-react";
import { RevenueChart } from "@/components/revenue-chart";
import {
  automations,
  kpis,
  marketplaceHealth,
  orderActions,
  productMargins,
  revenueSeries,
} from "@/lib/dashboard-data";

const navigation = [
  "Kontrol Merkezi",
  "Siparişler",
  "Karlılık",
  "Reklamlar",
  "Stok",
  "AI Asistan",
  "Raporlar",
];

const statusLabel = {
  urgent: "Kritik",
  normal: "Hazır",
  waiting: "İncele",
} as const;

export default function Home() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar" aria-label="Panel navigasyonu">
        <div className="brand">
          <div className="brand-mark">
            <Store size={22} />
          </div>
          <div>
            <span>SellerOS</span>
            <small>Marketplace Command</small>
          </div>
        </div>

        <nav className="nav-list">
          {navigation.map((item, index) => (
            <a className={index === 0 ? "active" : ""} href={`#${item}`} key={item}>
              <Layers3 size={17} />
              {item}
            </a>
          ))}
        </nav>

        <div className="sync-card">
          <Globe2 size={20} />
          <span>Çoklu pazar yeri</span>
          <strong>3 kanal canlı</strong>
          <p>Trendyol, Hepsiburada ve N11 verileri tek operasyon akışında birleşti.</p>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Bugünün operasyon özeti</p>
            <h1>E-ticaret satıcıları için akıllı yönetim paneli</h1>
          </div>
          <div className="topbar-actions">
            <div className="search-box">
              <Search size={17} />
              <span>Sipariş, SKU veya müşteri ara</span>
            </div>
            <button className="icon-button" aria-label="Bildirimler">
              <Bell size={19} />
            </button>
            <button className="primary-button">
              <WandSparkles size={18} />
              AI önerileri
            </button>
          </div>
        </header>

        <section className="hero-grid">
          <div className="hero-card">
            <div className="hero-copy">
              <span className="pill">Helpigo benzeri gelişmiş panel</span>
              <h2>Kar, reklam, stok ve müşteri sorularını tek ekranda yönetin.</h2>
              <p>
                Panel; pazar yeri entegrasyonlarını, marj hesaplarını, operasyon SLA'lerini ve
                insan onaylı AI akışlarını satıcının günlük kararlarına göre önceliklendirir.
              </p>
              <div className="hero-actions">
                <button className="primary-button">
                  Günlük planı oluştur
                  <ArrowRight size={18} />
                </button>
                <button className="secondary-button">
                  <Download size={18} />
                  Rapor indir
                </button>
              </div>
            </div>
            <div className="hero-metrics" aria-label="Panel otomasyon metrikleri">
              <div>
                <strong>11</strong>
                <span>Riskli SKU</span>
              </div>
              <div>
                <strong>4,8x</strong>
                <span>Reklam ROAS</span>
              </div>
              <div>
                <strong>96%</strong>
                <span>Zamanında kargo</span>
              </div>
            </div>
          </div>

          <div className="ai-card">
            <div className="card-heading">
              <span className="icon-chip">
                <WandSparkles size={18} />
              </span>
              <div>
                <p className="eyebrow">AI karar kuyruğu</p>
                <h3>8 öneri onay bekliyor</h3>
              </div>
            </div>
            <p>
              "Premium organizer set" için %3 fiyat artışı önerildi. Tahmini marj etkisi +₺8.400,
              stok bitiş tahmini 12 gün.
            </p>
            <button className="ghost-button">
              Önerileri incele
              <ChevronRight size={17} />
            </button>
          </div>
        </section>

        <section className="kpi-grid" aria-label="Ana performans göstergeleri">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;

            return (
              <article className="metric-card" key={kpi.label}>
                <div className="metric-icon">
                  <Icon size={20} />
                </div>
                <span>{kpi.label}</span>
                <strong>{kpi.value}</strong>
                <p className={kpi.tone}>{kpi.delta}</p>
                <small>{kpi.detail}</small>
              </article>
            );
          })}
        </section>

        <section className="content-grid">
          <article className="panel-card chart-panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Finans görünümü</p>
                <h2>Ciro, kar ve reklam harcaması</h2>
              </div>
              <button className="secondary-button compact">
                <Filter size={16} />
                Filtrele
              </button>
            </div>
            <RevenueChart data={revenueSeries} />
            <div className="legend-row">
              <span>
                <i className="dot sky" />
                Ciro
              </span>
              <span>
                <i className="dot green" />
                Kar
              </span>
              <span>
                <i className="dot amber" />
                Reklam
              </span>
            </div>
          </article>

          <article className="panel-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Pazar yeri sağlığı</p>
                <h2>Entegrasyon durumu</h2>
              </div>
              <Settings size={20} />
            </div>
            <div className="health-list">
              {marketplaceHealth.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="health-item" key={item.title}>
                    <div className="health-title">
                      <span className="icon-chip">
                        <Icon size={17} />
                      </span>
                      <div>
                        <strong>{item.title}</strong>
                        <small>{item.detail}</small>
                      </div>
                    </div>
                    <div className="score">
                      <span>{item.score}</span>
                      <small>{item.status}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        <section className="operations-grid">
          <article className="panel-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Öncelikli işler</p>
                <h2>Operasyon aksiyonları</h2>
              </div>
              <CalendarClock size={20} />
            </div>
            <div className="action-list">
              {orderActions.map((action) => {
                const Icon = action.icon;

                return (
                  <div className={`action-item ${action.status}`} key={action.id}>
                    <span className="icon-chip">
                      <Icon size={17} />
                    </span>
                    <div>
                      <strong>{action.title}</strong>
                      <small>
                        {action.marketplace} · {action.id}
                      </small>
                    </div>
                    <div className="action-meta">
                      <span>{action.value}</span>
                      <em>{statusLabel[action.status]} · {action.due}</em>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="panel-card product-panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SKU karlılığı</p>
                <h2>Marj ve stok kontrolü</h2>
              </div>
              <LineChart size={20} />
            </div>
            <div className="product-table" role="table" aria-label="SKU karlılık tablosu">
              <div className="table-row table-head" role="row">
                <span>Ürün</span>
                <span>Ciro</span>
                <span>Marj</span>
                <span>Stok</span>
                <span>Trend</span>
              </div>
              {productMargins.map((product) => (
                <div className="table-row" role="row" key={product.sku}>
                  <span>
                    <strong>{product.name}</strong>
                    <small>{product.sku}</small>
                  </span>
                  <span>{product.revenue}</span>
                  <span>{product.margin}</span>
                  <span>{product.stock}</span>
                  <span className={product.trend.startsWith("+") ? "positive" : "warning"}>
                    {product.trend}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="automation-grid">
          {automations.map((automation) => {
            const Icon = automation.icon;

            return (
              <article className="automation-card" key={automation.title}>
                <span className="icon-chip">
                  <Icon size={18} />
                </span>
                <h3>{automation.title}</h3>
                <p>{automation.detail}</p>
                <strong>{automation.impact}</strong>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}
