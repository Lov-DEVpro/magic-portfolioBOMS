"use client";

import { Flex, Badge } from "@once-ui-system/core";

const services = [
  "Sajamska industrija",
  "Projektovanje sajamskih štandova",
  "Izrada sajamskih štandova",
  "Opremanje sajmova",
  "Transport i skladištenje",
  "Montaža i demontaža"
];

export const ServicesList = () => {
  return (
    <Flex fillWidth gap="12" wrap marginTop="16">
      {services.map((service, i) => (
        <Badge 
          key={i} 
          variant="brand" 
          style={{ 
            padding: '8px 16px', 
            cursor: 'pointer', 
            transition: 'all 0.2s ease',
            fontSize: '14px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(var(--brand-rgb), 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {service}
        </Badge>
      ))}
    </Flex>
  );
};
