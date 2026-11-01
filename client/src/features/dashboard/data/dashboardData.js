import {
  AlertTriangle,
  Copy,
  Clock,
  Lock,
  List,
  Monitor,
  Smartphone,
  Shield,
  CreditCard,
  FileText,
  UserRound,
  CheckCircle,
} from "lucide-react";

// Vault overview categories
export const vaultCategories = [
  {
    id: 1,
    title: "Logins",
    count: 25,
    total: 50,
    icon: Lock,
  },
  {
    id: 2,
    title: "Cards",
    count: 3,
    total: 50,
    icon: CreditCard,
  },
  {
    id: 3,
    title: "Notes",
    count: 3,
    total: 50,
    icon: FileText,
  },
  {
    id: 4,
    title: "Identities",
    count: 3,
    total: 50,
    icon: UserRound,
  },
];

// Needs attention
export const attentionItems = [
  {
    id: 1,
    icon: AlertTriangle,
    iconColor: "warning",
    title: "7 weak passwords",
    description: "Easy to guess or too short",
    badge: "Review",
  },
  {
    id: 2,
    icon: Copy,
    iconColor: "accent",
    title: "3 reused passwords",
    description: "Same password in several places",
    badge: "Review",
  },
  {
    id: 3,
    icon: Shield,
    iconColor: "danger",
    title: "1 compromised password",
    description: "Found in a known data breach",
    badge: "Review",
  },
  {
    id: 4,
    icon: Lock,
    iconColor: "warning",
    title: "1 password older than a year",
    description: "Consider rotating it",
    badge: "Review",
  },
];

// Recent activities
export const recentActivities = [
  {
    id: 1,
    icon: Monitor,
    iconColor: "accent",
    title: "Signed in",
    description: "Chrome on Windows",
    meta: "10 min ago",
  },
  {
    id: 2,
    icon: Smartphone,
    iconColor: "accent",
    title: "New sign-in on iPhone",
    description: "Safari · Bengaluru",
    meta: "2 days ago",
  },
  {
    id: 3,
    icon: Shield,
    iconColor: "danger",
    title: "Breach alert",
    description: "A saved password was found in a leak",
    meta: "1 week ago",
  },
  {
    id: 4,
    icon: CheckCircle,
    iconColor: "success",
    title: "Master password changed",
    description: "Vault re-encrypted",
    meta: "3 months ago",
  },
];
