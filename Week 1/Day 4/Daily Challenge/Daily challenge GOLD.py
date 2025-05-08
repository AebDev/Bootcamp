import random

class Gene:
    def __init__(self):
        self.value = random.randint(0, 1)

    def mutate(self):
        self.value = 1 if self.value == 0 else 0


class Chromosome:
    def __init__(self):
        self.genes = []  # Initialize the list
        for _ in range(10):  # 10 genes per chromosome
            self.genes.append(Gene())

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:
                gene.mutate()


class DNA:
    def __init__(self):
        self.chromosomes = []  # Initialize the list
        for _ in range(10):  # 10 chromosomes per DNA
            self.chromosomes.append(Chromosome())

    def mutate(self):
        for chromosome in self.chromosomes:
            if random.random() < 0.5:
                chromosome.mutate()

    def is_all_ones(self):
        for chromosome in self.chromosomes:
            for gene in chromosome.genes:
                if gene.value != 1:
                    return False
        return True


class Organism:
    def __init__(self, probability):
        self.dna = DNA()
        self.probability = probability / 100.0  # Convert percentage to decimal

    def mutate(self):
        if random.random() < self.probability:
            self.dna.mutate()

    def has_perfect_dna(self):
        return self.dna.is_all_ones()




# === MAIN SIMULATION ===

def evolve_until_perfect(population_size=100, mutation_prob=66, max_generations=10000):
    population = [Organism(mutation_prob) for _ in range(population_size)]
    generations = 0

    while generations < max_generations:
        generations += 1

        if generations % 500 == 0:
            print(f"Generation {generations}: Evolving...")

        for organism in population:
            organism.mutate()

            if organism.dna.is_all_ones():
                print(f"\n🎉 Success! One organism reached perfect DNA after {generations} generations.")
                return generations

    print(f"\n⚠️ Max generations ({max_generations}) reached without success.")
    return -1


# === RUN THE SIMULATION ===

evolve_until_perfect()