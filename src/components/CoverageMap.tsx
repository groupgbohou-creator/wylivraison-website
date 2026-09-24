import React, { useState } from 'react';
import { 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Bike, 
  Store, 
  Search, 
  Sparkles, 
  AlertCircle,
  Navigation,
  Send
} from 'lucide-react';
import { COVERAGE_ZONES } from '../data/mockData';
import { CoverageZone } from '../types';

interface CoverageMapProps {
  initialAddress?: string;
  onOpenAppModal: () => void;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({ 
  initialAddress = '',
  onOpenAppModal 
}) => {
  const [selectedZone, setSelectedZone] = useState<CoverageZone>(COVERAGE_ZONES[0]);
  const [searchAddress, setSearchAddress] = useState<string>(initialAddress);
  const [checkResult, setCheckResult] = useState<{
    covered: boolean;
    zoneName: string;
    time: string;
    fee: number;
    restaurantsCount: number;
  } | null>(null);

  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const [voteNeighborhood, setVoteNeighborhood] = useState('');

  const handleCheck = (query: string) => {
    const q = query.toLowerCase().trim();
    if (!q) return;

    if (q.includes('plateau') && (q.includes('deux') || q.includes('2') || q.includes('vallon') || q.includes('aghien') || q.includes('jardin'))) {
      const z = COVERAGE_ZONES.find(x => x.id === 'zone-2p')!;
      setSelectedZone(z);
      setCheckResult({ covered: true, zoneName: z.name, time: z.deliveryTime, fee: z.deliveryFee, restaurantsCount: z.partnerCount });
    } else if (q.includes('angr') || q.includes('château') || q.includes('djibi') || q.includes('8e') || q.includes('8eme')) {
      const z = COVERAGE_ZONES.find(x => x.id === 'zone-angre')!;
      setSelectedZone(z);
      setCheckResult({ covered: true, zoneName: z.name, time: z.deliveryTime, fee: z.deliveryFee, restaurantsCount: z.partnerCount });
    } else if (q.includes('danga') || q.includes('saint-jean') || q.includes('ambassade') || (q.includes('cocody') && !q.includes('angr') && !q.includes('plateau'))) {
      const z = COVERAGE_ZONES.find(x => x.id === 'zone-cocody-centre')!;
      setSelectedZone(z);
      setCheckResult({ covered: true, zoneName: z.name, time: z.deliveryTime, fee: z.deliveryFee, restaurantsCount: z.partnerCount });
    } else if (q.includes('riviera') || q.includes('palmeraie') || q.includes('golf') || q.includes('attoban') || q.includes('bonoumin')) {
      const z = COVERAGE_ZONES.find(x => x.id === 'zone-riviera')!;
      setSelectedZone(z);
      setCheckResult({ covered: true, zoneName: z.name, time: z.deliveryTime, fee: z.deliveryFee, restaurantsCount: z.partnerCount });
    } else if (q.includes('zone 3') || q.includes('zone 4') || q.includes('marcory') || q.includes('biétry')) {
      const z = COVERAGE_ZONES.find(x => x.id === 'zone-zone3')!;
      setSelectedZone(z);
      setCheckResult({ covered: true, zoneName: z.name, time: z.deliveryTime, fee: z.deliveryFee, restaurantsCount: z.partnerCount });
    } else {
      setCheckResult({
        covered: false,
        zoneName: query,
        time: 'En cours d\'ouverture',
        fee: 0,
        restaurantsCount: 0
      });
    }
  };

  const handleVoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!voteNeighborhood.trim()) return;
    setVoteSubmitted(true);
    setTimeout(() => {
      setVoteNeighborhood('');
      setVoteSubmitted(false);
    }, 4000);
  };

  return (
    <section id="couverture" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF5400] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Zone de Couverture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
            Où livre Woudy à Abidjan ?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            Pour garantir un délai record de 25 à 40 minutes, nous concentrons nos flottes de livreurs sur la commune de Cocody et ses liaisons directes.
          </p>
        </div>

        {/* Address Eligibility Checker Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-200 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Navigation className="w-5 h-5 text-[#FF5400]" />
            <h3 className="text-base sm:text-lg font-bold text-neutral-900">
              Vérifiez si votre rue est éligible à la livraison en 30 min
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchAddress}
                onChange={(e) => setSearchAddress(e.target.value)}
                placeholder="Ex: Deux Plateaux Vallons, Rue des Jardins, Angré 8e, Danga..."
                className="w-full pl-10 pr-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-none focus:border-[#FF5400] focus:bg-white text-neutral-800"
              />
            </div>
            <button
              onClick={() => handleCheck(searchAddress)}
              className="bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs shadow-orange-500/20 whitespace-nowrap"
            >
              <Search className="w-4 h-4" />
              <span>Tester l'adresse</span>
            </button>
          </div>

          {/* Quick Suggestions Tags */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-neutral-400">Suggestions rapides :</span>
            {['2 Plateaux Vallons', 'Angré 8e Tranche', 'Cocody Danga', 'Riviera Golf', 'Zone 3'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSearchAddress(item);
                  handleCheck(item);
                }}
                className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-orange-100 hover:text-orange-800 text-neutral-700 font-medium transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Dynamic Result Alert */}
          {checkResult && (
            <div className={`mt-5 p-4 rounded-2xl border transition-all ${
              checkResult.covered
                ? 'bg-orange-50/80 border-orange-300 text-orange-950'
                : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}>
              {checkResult.covered ? (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF5400] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">
                        🎉 Zone 100% couverte : {checkResult.zoneName}
                      </h4>
                      <p className="text-xs text-neutral-600 mt-0.5">
                        Délai moyen estimé : <strong className="text-[#FF5400] font-bold">{checkResult.time}</strong> • Frais : <strong>{checkResult.fee.toLocaleString()} FCFA</strong> • Plus de <strong>{checkResult.restaurantsCount} restaurants</strong> partenaires à proximité.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenAppModal}
                    className="shrink-0 bg-[#FF5400] hover:bg-[#E04B00] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-xs shadow-orange-500/20"
                  >
                    Commander ici
                  </button>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">
                      Zone actuellement en phase d'extension ({checkResult.zoneName})
                    </h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Woudy dessert actuellement en priorité Cocody (2 Plateaux, Angré, Danga, Riviera) et Zone 3. Votez ci-dessous pour accélérer le lancement dans votre secteur !
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Interactive Map & Zones Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Map Graphic */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-base font-extrabold text-neutral-900 font-display">
                  Carte interactive du réseau Cocody
                </h4>
                <p className="text-xs text-neutral-500">
                  Cliquez sur une zone pour afficher les détails et restaurants partenaires
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="flex items-center gap-1 text-[#FF5400]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5400]"></span>
                  Active
                </span>
                <span className="flex items-center gap-1 text-neutral-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                  Extension
                </span>
              </div>
            </div>

            {/* Custom Interactive SVG Abidjan / Cocody Map Representation */}
            <div className="relative w-full aspect-[4/3] bg-neutral-950 rounded-2xl p-4 overflow-hidden border border-neutral-800">
              
              {/* Map background grid & lagoon aesthetic */}
              <svg viewBox="0 0 500 380" className="w-full h-full">
                <defs>
                  <linearGradient id="lagoonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#082f49" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.5" />
                  </linearGradient>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF5400" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FF5400" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ébrié Lagoon Representation */}
                <path
                  d="M 0 280 C 120 270, 180 310, 260 290 C 340 270, 420 310, 500 285 L 500 380 L 0 380 Z"
                  fill="url(#lagoonGrad)"
                />
                <text x="280" y="345" fill="#38bdf8" fontSize="11" fontWeight="bold" opacity="0.6">
                  LAGUNE ÉBRIÉ
                </text>

                {/* Major Roads / Boulevards (Latrille, François Mitterrand, Pont HKB) */}
                <path d="M 220 30 L 220 285" stroke="#334155" strokeWidth="3" strokeDasharray="4 2" />
                <path d="M 120 220 L 450 180" stroke="#334155" strokeWidth="3" strokeDasharray="4 2" />
                <path d="M 220 285 L 220 380" stroke="#FF5400" strokeWidth="2.5" strokeOpacity="0.8" />
                <text x="230" y="315" fill="#FF5400" fontSize="9" fontWeight="bold">
                  PONT HKB (Express Zone 3)
                </text>

                {/* Zone Polygons & Circles */}
                {/* 1. Deux Plateaux */}
                <g 
                  onClick={() => setSelectedZone(COVERAGE_ZONES[0])}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <circle 
                    cx="190" 
                    cy="140" 
                    r={selectedZone.id === 'zone-2p' ? "60" : "50"} 
                    fill="#c2410c" 
                    fillOpacity={selectedZone.id === 'zone-2p' ? "0.45" : "0.22"}
                    stroke="#FF5400" 
                    strokeWidth={selectedZone.id === 'zone-2p' ? "2.5" : "1.5"}
                  />
                  <circle cx="190" cy="140" r="4" fill="#FF5400" />
                  <text x="145" y="143" fill="#fff7ed" fontSize="11" fontWeight="bold">
                    2 Plateaux
                  </text>
                  <text x="145" y="156" fill="#fed7aa" fontSize="9">
                    Vallons & Aghien (20-30 min)
                  </text>
                </g>

                {/* 2. Angré */}
                <g 
                  onClick={() => setSelectedZone(COVERAGE_ZONES[1])}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <circle 
                    cx="275" 
                    cy="90" 
                    r={selectedZone.id === 'zone-angre' ? "60" : "50"} 
                    fill="#c2410c" 
                    fillOpacity={selectedZone.id === 'zone-angre' ? "0.45" : "0.22"}
                    stroke="#FF5400" 
                    strokeWidth={selectedZone.id === 'zone-angre' ? "2.5" : "1.5"}
                  />
                  <circle cx="275" cy="90" r="4" fill="#FF5400" />
                  <text x="240" y="93" fill="#fff7ed" fontSize="11" fontWeight="bold">
                    Angré
                  </text>
                  <text x="240" y="106" fill="#fed7aa" fontSize="9">
                    8e Tranche & Château
                  </text>
                </g>

                {/* 3. Cocody Centre */}
                <g 
                  onClick={() => setSelectedZone(COVERAGE_ZONES[2])}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <circle 
                    cx="160" 
                    cy="210" 
                    r={selectedZone.id === 'zone-cocody-centre' ? "55" : "45"} 
                    fill="#c2410c" 
                    fillOpacity={selectedZone.id === 'zone-cocody-centre' ? "0.45" : "0.22"}
                    stroke="#FF5400" 
                    strokeWidth={selectedZone.id === 'zone-cocody-centre' ? "2.5" : "1.5"}
                  />
                  <circle cx="160" cy="210" r="4" fill="#FF5400" />
                  <text x="120" y="213" fill="#fff7ed" fontSize="11" fontWeight="bold">
                    Cocody Centre
                  </text>
                  <text x="120" y="226" fill="#fed7aa" fontSize="9">
                    Danga & Ambassades
                  </text>
                </g>

                {/* 4. Riviera */}
                <g 
                  onClick={() => setSelectedZone(COVERAGE_ZONES[3])}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <circle 
                    cx="340" 
                    cy="180" 
                    r={selectedZone.id === 'zone-riviera' ? "60" : "50"} 
                    fill="#c2410c" 
                    fillOpacity={selectedZone.id === 'zone-riviera' ? "0.45" : "0.22"}
                    stroke="#FF5400" 
                    strokeWidth={selectedZone.id === 'zone-riviera' ? "2.5" : "1.5"}
                  />
                  <circle cx="340" cy="180" r="4" fill="#FF5400" />
                  <text x="310" y="183" fill="#fff7ed" fontSize="11" fontWeight="bold">
                    Riviera
                  </text>
                  <text x="310" y="196" fill="#fed7aa" fontSize="9">
                    Golf & Palmeraie
                  </text>
                </g>

                {/* 5. Zone 3 (South across lagoon) */}
                <g 
                  onClick={() => setSelectedZone(COVERAGE_ZONES[4])}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <circle 
                    cx="220" 
                    cy="330" 
                    r={selectedZone.id === 'zone-zone3' ? "45" : "35"} 
                    fill="#0369a1" 
                    fillOpacity={selectedZone.id === 'zone-zone3' ? "0.55" : "0.3"}
                    stroke="#38bdf8" 
                    strokeWidth={selectedZone.id === 'zone-zone3' ? "2.5" : "1.5"}
                  />
                  <circle cx="220" cy="330" r="4" fill="#38bdf8" />
                  <text x="185" y="333" fill="#f0fdf4" fontSize="10" fontWeight="bold">
                    Zone 3
                  </text>
                  <text x="185" y="345" fill="#7dd3fc" fontSize="8">
                    Liaison HKB (30-40 min)
                  </text>
                </g>

                {/* 6. Coming Soon: Yopougon / Plateau */}
                <g 
                  onClick={() => setSelectedZone(COVERAGE_ZONES[5])}
                  className="cursor-pointer opacity-40 hover:opacity-75"
                >
                  <circle cx="70" cy="160" r="40" fill="#64748b" fillOpacity="0.2" stroke="#94a3b8" strokeDasharray="3 3" />
                  <text x="35" y="163" fill="#cbd5e1" fontSize="9" fontWeight="bold">
                    Yopougon / Plateau
                  </text>
                  <text x="35" y="175" fill="#94a3b8" fontSize="7">
                    Phase 2 (2027)
                  </text>
                </g>
              </svg>

              {/* Overlay active indicator */}
              <div className="absolute bottom-3 left-3 bg-neutral-900/90 text-white px-3 py-1.5 rounded-xl text-xs backdrop-blur-md border border-neutral-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5400] animate-ping"></span>
                <span>Zone sélectionnée : <strong className="text-[#FF5400]">{selectedZone.name}</strong></span>
              </div>
            </div>
          </div>

          {/* Right: Selected Zone Details & Vote Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Zone Detail Card */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    selectedZone.status === 'active'
                      ? 'bg-orange-100 text-[#FF5400] border border-orange-200'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {selectedZone.status === 'active' ? 'Zone 100% Active' : 'Extension Prochaine'}
                  </span>
                  <h3 className="text-2xl font-black text-neutral-900 tracking-tight font-display mt-2">
                    {selectedZone.name}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs text-neutral-400 block">Délai moyen</span>
                  <span className="text-base font-black text-[#FF5400]">
                    {selectedZone.deliveryTime}
                  </span>
                </div>
              </div>

              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                {selectedZone.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-neutral-100">
                <div className="p-3 bg-neutral-50 rounded-xl">
                  <span className="text-[11px] text-neutral-500 block">Restaurants partenaires</span>
                  <span className="text-base font-extrabold text-neutral-900">
                    {selectedZone.partnerCount} adresses
                  </span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-xl">
                  <span className="text-[11px] text-neutral-500 block">Frais de livraison</span>
                  <span className="text-base font-extrabold text-[#FF5400]">
                    {selectedZone.deliveryFee > 0 ? `${selectedZone.deliveryFee.toLocaleString()} FCFA` : 'N/A'}
                  </span>
                </div>
              </div>

              {/* Popular Spots in Zone */}
              <div className="mt-4">
                <span className="text-xs font-bold text-neutral-700 block mb-1.5">
                  Points de repère fréquents :
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedZone.popularSpots.map((spot, i) => (
                    <span key={i} className="text-[11px] bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-lg">
                      📍 {spot}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenAppModal}
                className="w-full mt-6 py-3 bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-xs rounded-xl shadow-xs shadow-orange-500/20 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Commander dans cette zone</span>
              </button>
            </div>

            {/* Vote for your neighborhood Box */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 border border-orange-200">
              <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Votre quartier n'est pas encore sur la carte ?</span>
              </h4>
              <p className="text-xs text-neutral-600 mt-1">
                Aidez-nous à prioriser les prochains livreurs (Koumassi, Yopougon, Plateau, Bingerville...).
              </p>

              <form onSubmit={handleVoteSubmit} className="mt-3 flex gap-2">
                <input
                  type="text"
                  value={voteNeighborhood}
                  onChange={(e) => setVoteNeighborhood(e.target.value)}
                  placeholder="Votre commune ou quartier..."
                  className="flex-1 px-3 py-2 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:border-orange-500 text-neutral-800"
                />
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1 shrink-0 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Voter</span>
                </button>
              </form>

              {voteSubmitted && (
                <p className="mt-2 text-[11px] font-bold text-orange-950 bg-orange-100 p-2 rounded-lg border border-orange-300 animate-fadeIn">
                  ✨ Merci ! Votre quartier a été enregistré dans nos priorités d'extension.
                </p>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
