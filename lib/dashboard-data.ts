import {
  BadgeCheck,
  BarChart3,
  Bot,
  Boxes,
  CircleAlert,
  Clock3,
  CreditCard,
  Megaphone,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Kpi = {
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "warning" | "neutral";
  detail: string;
  icon: LucideIcon;
};

export type RevenuePoint = {
  day: string;
  revenue: number;
  profit: number;
  adSpend: number;
};

export type MarketplaceHealth = {
  title: string;
  status: string;
  score: number;
  detail: string;
  icon: LucideIcon;
};

export type OrderAction = {
  id: string;
  title: string;
  marketplace: string;
  due: string;
  value: string;
  status: "urgent" | "normal" | "waiting";
  icon: LucideIcon;
};

export type ProductMargin = {
  sku: string;
  name: string;
  revenue: string;
  margin: string;
  stock: string;
  trend: string;
};

export type Automation = {
  title: string;
  detail: string;
  impact: string;
  icon: LucideIcon;
};

export const kpis: Kpi[] = [
  {
    label: "Net ciro",
    value: "₺842.650",
    delta: "+18,4%",
    tone: "positive",
    detail: "Geçen 30 güne göre",
    icon: CreditCard,
  },
  {
    label: "Tahmini kar",
    value: "₺196.420",
    delta: "+9,7%",
    tone: "positive",
    detail: "Komisyon, kargo ve reklam sonrası",
    icon: BarChart3,
  },
  {
    label: "Aksiyon bekleyen",
    value: "37",
    delta: "12 kritik",
    tone: "warning",
    detail: "Sipariş, iade ve soru kuyruğu",
    icon: CircleAlert,
  },
  {
    label: "Operasyon skoru",
    value: "94/100",
    delta: "+3 puan",
    tone: "positive",
    detail: "SLA, stok ve memnuniyet birleşik skoru",
    icon: ShieldCheck,
  },
];

export const revenueSeries: RevenuePoint[] = [
  { day: "Pzt", revenue: 105000, profit: 24500, adSpend: 11800 },
  { day: "Sal", revenue: 128000, profit: 31800, adSpend: 14200 },
  { day: "Çar", revenue: 118000, profit: 27400, adSpend: 12500 },
  { day: "Per", revenue: 146000, profit: 39200, adSpend: 16800 },
  { day: "Cum", revenue: 163000, profit: 42100, adSpend: 18100 },
  { day: "Cmt", revenue: 174000, profit: 45200, adSpend: 19600 },
  { day: "Paz", revenue: 153000, profit: 36800, adSpend: 17100 },
];

export const marketplaceHealth: MarketplaceHealth[] = [
  {
    title: "Trendyol",
    status: "Senkronize",
    score: 98,
    detail: "Son veri akışı 4 dk önce",
    icon: BadgeCheck,
  },
  {
    title: "Hepsiburada",
    status: "Kargo uyarısı",
    score: 82,
    detail: "5 sipariş için teslim tarihi riski var",
    icon: Truck,
  },
  {
    title: "N11",
    status: "Stok takipte",
    score: 91,
    detail: "3 SKU kritik stok seviyesine indi",
    icon: Boxes,
  },
];

export const orderActions: OrderAction[] = [
  {
    id: "TY-48219",
    title: "Aynı gün kargo SLA yaklaşıyor",
    marketplace: "Trendyol",
    due: "42 dk",
    value: "₺18.240",
    status: "urgent",
    icon: Truck,
  },
  {
    id: "HB-90318",
    title: "İade nedeni fiyat/performans",
    marketplace: "Hepsiburada",
    due: "2 sa",
    value: "₺4.890",
    status: "waiting",
    icon: RotateCcw,
  },
  {
    id: "N11-77120",
    title: "Toplu fatura kesimi hazır",
    marketplace: "N11",
    due: "Bugün",
    value: "18 belge",
    status: "normal",
    icon: PackageCheck,
  },
];

export const productMargins: ProductMargin[] = [
  {
    sku: "SKU-ALPHA-42",
    name: "Akıllı LED Masa Lambası",
    revenue: "₺126.800",
    margin: "%31,4",
    stock: "128 adet",
    trend: "+%22",
  },
  {
    sku: "SKU-NOVA-13",
    name: "Kablosuz Şarj Standı",
    revenue: "₺98.500",
    margin: "%24,8",
    stock: "34 adet",
    trend: "+%11",
  },
  {
    sku: "SKU-VELA-08",
    name: "Premium Organizer Set",
    revenue: "₺74.900",
    margin: "%18,6",
    stock: "Kritik: 9",
    trend: "-%4",
  },
  {
    sku: "SKU-LIMA-21",
    name: "Ergonomik Laptop Yükseltici",
    revenue: "₺69.300",
    margin: "%28,1",
    stock: "76 adet",
    trend: "+%17",
  },
];

export const automations: Automation[] = [
  {
    title: "AI soru taslakları",
    detail: "Ürün sorularını marka tonuna göre yanıtlar ve onaya gönderir.",
    impact: "Günde 3,2 saat tasarruf",
    icon: Bot,
  },
  {
    title: "Reklam bütçe koruması",
    detail: "ACOS hedefini aşan kampanyalarda teklifleri otomatik yavaşlatır.",
    impact: "₺14.800 korunmuş bütçe",
    icon: Megaphone,
  },
  {
    title: "Kritik stok tetikleyici",
    detail: "Satış hızına göre stok bitiş tarihini tahmin eder ve satın alma listesi üretir.",
    impact: "11 SKU için uyarı",
    icon: Clock3,
  },
  {
    title: "Kar fırsatı avcısı",
    detail: "Komisyon, kargo ve rakip fiyatını birleştirip fiyat önerileri çıkarır.",
    impact: "₺32.400 ek kar potansiyeli",
    icon: Sparkles,
  },
];
