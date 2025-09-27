# TS Simple IoC for Express

TypeScript + Express projeleri için minimal ve eğitici **IoC (Inversion of Control) Container**.  
Amacı, `new` kullanmadan bağımlılıkları merkezi olarak yönetmek ve modülleri test edilebilir ve gevşek bağlı hale getirmektir.

---

## 🚀 Mevcut Özellikler

- Basit bağımlılık enjeksiyonu
- Constructor parametreleri üzerinden bağımlılık çözümleme
- TypeScript + Reflect Metadata ile tip güvenli çözümleme
- Express projelerinde kullanılabilir

```ts
import { container } from "./config/container";

container.register("UserRepository", UserRepository);
container.register("UserService", UserService);

const userService = container.resolve<UserService>("UserService");
```

## ❌ Henüz Eksik Özellikler (Inversify ile Karşılaştırıldığında)

### Yaşam Döngüsü Yönetimi
- Singleton, transient ve request-scoped instance yönetimi yok

### Interface Binding
- Şu anda sadece class isimleri kayıt için kullanılıyor

### Decorator Desteği
- @Injectable() veya @Inject() decoratorları yok

### Otomatik Çözümleme / Auto-Wiring
- Manuel kayıt gerekli, otomatik bağlama yok

### Named / Tagged Bindings
- Aynı interface'in birden fazla implementasyonu arasında seçim yapma desteği yok

### Dynamic / Factory Bindings
- Runtime factory veya özel instance oluşturma yok

### Middleware / Interception
- Logging, caching veya validation için method çağrılarını engelleyemiyor

### Conditional Bindings
- Environment veya koşullara göre bağımlılık çözümleme yok

### Module / Container Composition
- Birden fazla container modülünü birleştirme desteği yok

### Error Reporting and Debugging
- Detaylı bağımlılık grafiği veya gelişmiş hata mesajları yok

## 🗺️ Yol Haritası / Planlanan Özellikler

- ✅ Yaşam döngüsü yönetimi (Singleton / Transient / Request)
- ✅ Interface tabanlı bağlama desteği
- ✅ Decorator tabanlı otomatik kayıt ve enjeksiyon
- ✅ Factory / dynamic bindings
- ✅ Named / Tagged bindings
- ✅ Conditional bindings
- ✅ Module / container composition
- ✅ Interception / middleware desteği
- ✅ Error reporting ve bağımlılık grafiğini iyileştirme

