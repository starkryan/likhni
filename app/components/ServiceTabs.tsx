"use client"

import { useState, useEffect } from "react";
import { services } from "@/app/data/services";
import { ServiceCard } from "@/app/components/ServiceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton";

// Add type for service
interface Service {
  id: string
  title: string
  description: string
  url: string
  icon: string
  usersCount: string
  status: "operational" | "maintenance" | "issues"
  features: string[]
  tags: string[]
  category: string
  lastUpdated: string
}

export function ServiceTabs() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayedServices, setDisplayedServices] = useState<Service[]>(services);

  const [filters, setFilters] = useState({
    onlyFree: false,
    noSignup: false,
    recentlyUpdated: false,
    onlyOperational: false
  });

  // Update the filteredServices to handle undefined values safely
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' ? true : service.category === selectedCategory;
    const matchesSearch = (service.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                         (service.description?.toLowerCase() || '').includes(searchQuery.toLowerCase());
    const matchesFilters = (
      (!filters.onlyFree || (service.tags || []).includes("Free")) &&
      (!filters.noSignup || (service.tags || []).includes("No Sign-up")) &&
      (!filters.recentlyUpdated || (service.lastUpdated || '').includes("Real-time")) &&
      (!filters.onlyOperational || service.status === "operational")
    );
    return matchesCategory && matchesSearch && matchesFilters;
  });

  // Update services when filters change
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDisplayedServices(filteredServices);
      setLoading(false);
    }, 300); // Short delay for smooth transition
  }, [selectedCategory, searchQuery, filters]);

  return (
    <Tabs defaultValue="all" className="w-full space-y-8">
      {/* Search and Filter Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between max-w-[900px] mx-auto px-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 w-full h-11 bg-background/60 backdrop-blur-sm"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-11 px-4 gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={filters.onlyFree}
              onCheckedChange={(checked) => setFilters(f => ({ ...f, onlyFree: checked }))}
            >
              Free Services
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.noSignup}
              onCheckedChange={(checked) => setFilters(f => ({ ...f, noSignup: checked }))}
            >
              No Sign-up Required
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.recentlyUpdated}
              onCheckedChange={(checked) => setFilters(f => ({ ...f, recentlyUpdated: checked }))}
            >
              Recently Updated
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.onlyOperational}
              onCheckedChange={(checked) => setFilters(f => ({ ...f, onlyOperational: checked }))}
            >
              Operational
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center px-4">
        <TabsList className="h-11 p-1 bg-background/60 backdrop-blur-sm">
          <TabsTrigger value="all" onClick={() => setSelectedCategory('all')} className="h-9">
            All
          </TabsTrigger>
          <TabsTrigger value="government" onClick={() => setSelectedCategory('government')} className="h-9">
            Government
          </TabsTrigger>
          <TabsTrigger value="banking" onClick={() => setSelectedCategory('banking')} className="h-9">
            Banking
          </TabsTrigger>
          <TabsTrigger value="utilities" onClick={() => setSelectedCategory('utilities')} className="h-9">
            Utilities
          </TabsTrigger>
          <TabsTrigger value="travel" onClick={() => setSelectedCategory('travel')} className="h-9">
            Travel
          </TabsTrigger>
        </TabsList>
      </div>

      {/* Services Grid */}
      <div className="px-4">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={`skeleton-${i}`} className="h-[180px] rounded-xl" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto">
              {displayedServices.map((service, index) => (
                <ServiceCard
                  key={`${service.id}-${index}`}
                  {...service}
                  features={service.features ?? []}
                />
              ))}
            </div>
            
            {displayedServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No services found matching your criteria.
                </p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setFilters({
                      onlyFree: false,
                      noSignup: false,
                      recentlyUpdated: false,
                      onlyOperational: false
                    });
                  }}
                  className="mt-2"
                >
                  Reset all filters
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </Tabs>
  );
} 